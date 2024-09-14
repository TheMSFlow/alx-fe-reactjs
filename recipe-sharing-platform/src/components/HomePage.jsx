import React from 'react'
import { useState, useEffect } from 'react'
import data from '../data.json'

const initialData = data

const HomePage = () => {
const [data, setData] = useState(initialData)

useEffect(() => {
    setData(initialData)
},[])

  return (
    <>
    <h1 className='text-blue-950 text-3xl md:text-4xl block text-left lg:text-center mt-4  md:my-8 ml-8'> Recipe Sharing App</h1>
    <ul className=' p-8 w-auto grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
    {data.map((data) => (
     <li key={data.id} className='flex flex-col gap-4 p-8 bg-blue-100 shadow hover:shadow-lg transition-shadow duration-200 rounded-lg lg:w-[400px]'>
       <img src={data.image} width="auto" height="auto"/>
       <h2 className='text-blue-950 text-3xl md:text-4xl capitalize font-medium '>{data.title}</h2>
       <p className='text-blue-950 text-lg md:text-2xl'>{data.summary}</p>
       <p className='text-blue-950 text-[1.15rem] md:text-[1.5rem]'><span className='font-medium'>Ingredients:</span> {data.ingredients}</p>
       <p className='text-blue-950 text-[1.15rem] md:text-[1.5rem]'><span className='font-medium'>Preparation Steps:</span> {data.preparation}</p>
     </li>
    ))}
    </ul> 
    </>
  );
}

export default HomePage