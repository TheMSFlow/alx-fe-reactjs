import React, { useState, useEffect } from 'react'
import { fetchUserData } from '../services/githubService'


const Search = () => {
    const [searchParams, setSearchParams] = useState({
        username: '',
        location: '',
        minRepos: ''
    });
    const [userData, setUserData] = useState({total_count: 0, users: [] });
    const [status, setStatus] = useState({loading:'', error: null});
    const [page, setPage] = useState(1);
    const [perPage] = useState(30);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchParams(prevParams => ({...prevParams, [name]: e.target.value}));
    };

        
            const handleSearch = async () => {
                setStatus({loading: 'Loading', error: null});
             try{
                const data = await fetchUserData(
                    searchParams.username, 
                    searchParams.location, 
                    searchParams.minRepos, 
                    perPage, 
                    page
                );
                    setUserData(data);
            } catch (error) {
                setStatus({ loading: '', error: 'Looks like we cant find the user' });
                setUserData({ total_count: 0, users: [] });
            } finally {
                setStatus((prev) => ({
                    ...prev, loading: false
                }))
             }
            };

        const handleSubmit = (e) => {
            e.preventDefault();
            setPage(1);
            handleSearch();
        }
    

    const totalPages = Math.ceil(userData.total_count / perPage); 

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };


  return (
    <>
     <form className='flex flex-col w-1/3 justify-center items-center mb-16' onSubmit={handleSubmit}>
                <input 
                    className='border-b-2 border-blue-800 text-lg py-4 px-4 lg:w-[100%] mb-6 placeholder-slate-400' 
                    onChange={handleChange} 
                    type='text' 
                    name='username' 
                    value={searchParams.username} 
                    placeholder='enter github username'
                    />
                <input
                    className='border-b-2 border-blue-800 text-lg py-4 px-4 lg:w-[100%] mb-6 placeholder-slate-400'
                    onChange={handleChange}
                    type='text'
                    name='location'
                    value={searchParams.location}
                    placeholder='Enter location (optional)'
                />
                <input
                    className='border-b-2 border-blue-800 text-lg py-4 px-4 lg:w-[100%] mb-12 placeholder-slate-400'
                    onChange={handleChange}
                    type='number'
                    name='minRepos'
                    value={searchParams.minRepos}
                    placeholder='Minimum repositories (optional)'
                />
    <button type='submit' className='bg-blue-950 text-slate-100 text-2xl py-4 px-2 lg:w-[100%] border rounded-2xl'>Search</button>
    </form>

    {status.loading && <p>{status.loading}</p>}
    {status.error && <p>{status.error}</p>}
    {userData && (
        <div className='w-[100%] flex flex-col justify-center items-center'>
            <h2>{userData.users.length > 0 ? `Search Results: ${userData.users.length}` : null} </h2>
            <ul>
                {userData.users.map((user, index) => (
                    <li key={user.id} className='bg-slate-100 hover:bg-slate-200 p-8 rounded-3xl w-auto flex flex-row justify-left items- gap-8 shadow hover:shadow-md transition-all mt-10'>
                <img className='object-contain' src={user.avatar_url} alt={userData.name} width="100" />
                <div>
                    <h2 className='text-gray-700 text-6xl inline-block'>{index + 1 + (page - 1) * perPage}. {user.login}</h2>
                    <h3 className='text-3xl mt-1'>Profile link: {user.html_url}</h3>
                    <p className='text-xl italic mt-2'>Bio: {user.bio}</p>
                    <p>Repo: {user.repos_url}</p>
                 </div> 
                </li>
                ))} 
            </ul>
            {userData.users.length > 29 && <div className='flex flex-row gap-8 mt-12 mb-[10rem]'>
                <button className='py-4 px-10 bg-gray-700 text-slate-100 rounded-lg' onClick={handlePrevPage} disabled={page === 1}>Previous</button>
                <button className='py-4 px-10 bg-gray-700 text-slate-100 rounded-lg' onClick={handleNextPage} disabled={page === totalPages}>Next</button>
            </div>}
            
                
        </div>
      )}
    </>
  );
};

export default Search