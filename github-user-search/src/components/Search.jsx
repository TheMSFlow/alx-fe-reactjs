import React from 'react'
import { useState } from 'react'
import { fetchUserData } from '../services/githubService'


const Search = () => {
    const [username, setUsername] = useState('')
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        console.log(e);
        setUsername(e.target.value);
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading("Loading...");
     try{
        const data = await fetchUserData(username);
        setUserData(data);
        console.log(data);
        setError(null)
     } catch (error) {
        setError('Looks like we cant find the user');
        setUserData(null);
     }
    };


  return (
    <>
     <form onSubmit={handleSearch}>
    <input className='border-b-2 border-blue-800 text-lg py-4 px-4 lg:w-[40%] mb-6 placeholder-slate-400' onChange={handleChange} type='text' name='search' value={username} placeholder='enter github username'/>
    <button type='submit' className='bg-blue-950 text-slate-100 text-2xl py-4 px-2 w-[200px] border rounded-2xl'>Enter</button>
    </form>
    {loading && <p>{loading}</p>}
    {error && <p>{error}</p>}
    {userData && (
        <div className='bg-slate-100 hover:bg-slate-200 p-8 rounded-3xl w-[40%] flex flex-row justify-center items- gap-8 shadow hover:shadow-md transition-all mt-10'>
            <img className='object-contain' src={userData.avatar_url} alt={userData.name} width="100" />
            <div>
                <h2 className='text-gray-700 text-6xl inline-block'>{userData.login}</h2>
                <h3 className='text-3xl mt-1'>{userData.name}</h3>
                <p className='text-xl italic mt-2'>{userData.bio}</p>
            </div> 
        </div>
      )}
    </>
  );
};

export default Search