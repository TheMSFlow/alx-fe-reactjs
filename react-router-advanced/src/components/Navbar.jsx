import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './auth'

const Navbar = () => {
  const auth = useAuth()

  return (
    <nav style = {{
        display: "flex",
        flexDirection: "row",
        gap: "2rem"
    }}>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/blog'>Blog</Link>
        {!auth.user && (
          <Link to='/login'>Login</Link>
        )}
    </nav>
  )
}

export default Navbar