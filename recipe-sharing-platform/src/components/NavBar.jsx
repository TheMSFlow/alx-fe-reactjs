import React from 'react'
import { Link } from 'react-router-dom'
import HomePage from './HomePage'
import AddNewRecipe from './AddRecipeForm'

const NavBar = () => {

  return (
    <nav className='text-blue-950 md:text-2xl flex flex-row gap-4 px-8 py-4 md:py-8 bg-blue-200 '>
        <Link to="/">Homepage</Link>
        <Link to="/new">New Recipe</Link>
    </nav>
  )
}

export default NavBar