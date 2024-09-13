import React from 'react'
import { useState, useEffect } from 'react'
import data from '../data.json'

const initialData = data

const HomePage = () => {
const [data, setData] = useState(initialData)

useEffect(() => {
    setData(initialData)
},[])

const recipeList = data.map((data) => {
    return(
    <ul key={data.id} className='w-96'>
        <li>
        <img src={data.image} width="auto" height="auto"/>
        <h2>{data.title}</h2>
        <p>{data.summary}</p>
        <p>{data.ingredients}</p>
        <p>{data.preparation}</p>
        </li>
    </ul>
    )
    
})
  return (
    <>
    <h1 className='text-blue-500 text-3xl block text-center mt-4 mb-8'> Recipe Sharing App</h1>
    <div>{recipeList}</div>
    </>
  )
}

export default HomePage