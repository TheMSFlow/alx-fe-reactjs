import React from 'react'
import { useState } from 'react'
const Search = () => {
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked");
    }


  return (
    <form>
    <input className='border-b-2 border-blue-800 text-lg py-4 px-4 lg:w-[40%] mb-6 placeholder-slate-400' onChange={handleChange} type='text'  name='search' placeholder='enter github username'/>
    <button type='submit' className='bg-blue-950 text-slate-100 text-2xl py-4 px-2 w-[200px] border rounded-2xl' onSubmit={handleSubmit}>Enter</button>
    </form>
  )
}

export default Search