import React from 'react'
import { Link } from 'react-router-dom'
import HomePage from './HomePage'
import AddNewRecipe from './AddRecipeForm'

const NavBar = () => {

  return (
    <nav className='flex flex-row gap-4 pl-8 py-4 bg-slate-200 '>
        <Link to="/">Homepage</Link>
        <Link to="/new">New Recipe</Link>
    </nav>
  )
}

export default NavBar