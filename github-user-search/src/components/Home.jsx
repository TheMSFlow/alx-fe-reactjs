import React from 'react'
import Search from './Search'

const Home = () => {
  return (
    <>
    <main className='flex flex-col justify-start items-center w-svw h-svh'>
        <h1 className='text-blue-900 mt-8 text-9xl mb-16'>GitHub User Search</h1>
        <Search />
    </main>
    
    </>
  )
}

export default Home