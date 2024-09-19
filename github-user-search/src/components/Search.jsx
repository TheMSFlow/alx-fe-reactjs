import React from 'react'
import { useState } from 'react'
import { fetchUserData } from '../services/githubService'


const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        console.log(e);
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'location') {
            setLocation(value);
        } else if (name === 'minRepos') {
            setMinRepos(value);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading("Loading...");
        setError(null);
     try{
        const data = await fetchUserData(username, location, minRepos);
        if (location && data.location && !data.location.toLowerCase().includes(location.toLowerCase())) {
            setError(`No users found in location: ${location}`);
            setUserData(null);
        } else if (minRepos && data.public_repos < parseInt(minRepos)) {
            setError(`User has less than ${minRepos} repositories`);
            setUserData(null);
        } else {
            setUserData(data);
        }
    } catch (error) {
        setError('User not found');
        setUserData([]);
    } finally {
        setLoading(false);
     }
    };


  return (
    <>
     <form className='flex flex-col w-1/3 justify-center items-center mb-16' onSubmit={handleSearch}>
                <input 
                    className='border-b-2 border-blue-800 text-lg py-4 px-4 lg:w-[100%] mb-6 placeholder-slate-400' 
                    onChange={handleChange} 
                    type='text' 
                    name='username' 
                    value={username} 
                    placeholder='enter github username'
                    />
                <input
                    className='border-b-2 border-blue-800 text-lg py-4 px-4 lg:w-[100%] mb-6 placeholder-slate-400'
                    onChange={handleChange}
                    type='text'
                    name='location'
                    value={location}
                    placeholder='Enter location (optional)'
                />
                <input
                    className='border-b-2 border-blue-800 text-lg py-4 px-4 lg:w-[100%] mb-12 placeholder-slate-400'
                    onChange={handleChange}
                    type='number'
                    name='minRepos'
                    value={minRepos}
                    placeholder='Minimum repositories (optional)'
                />
    <button type='submit' className='bg-blue-950 text-slate-100 text-2xl py-4 px-2 lg:w-[100%] border rounded-2xl'>Search</button>
    </form>

    {loading && <p>{loading}</p>}
    {error && <p>{error}</p>}
    {userData && (
        <div className='w-[100%] flex flex-col justify-center items-center'>
            <h2>Search Results: {userData.length}</h2>
            <ul>
                {userData.map((user, index) => (
                    <li key={user.id} className='bg-slate-100 hover:bg-slate-200 p-8 rounded-3xl w-auto flex flex-col justify-center items- gap-8 shadow hover:shadow-md transition-all mt-10'>
                <img className='object-contain' src={user.avatar_url} alt={userData.name} width="100" />
                <div>
                    <h2 className='text-gray-700 text-6xl inline-block'>{index + 1}. {user.login}</h2>
                    <h3 className='text-3xl mt-1'>{user.html_url}</h3>
                    <p className='text-xl italic mt-2'>{user.bio}</p>
                    <p>Public Repositories: {user.repos_url}</p>
                 </div> 
                </li>
                ))} 
            </ul>
        </div>
      )}
    </>
  );
};

export default Search