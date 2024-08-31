import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
const auth = useAuth()
const navigate = useNavigate()

const handleLogout = () => {
  auth.logout()
  navigate('/')
}

  return (
    <>
    <div style = {{
      display: "flex",
      gap: "2rem",
      alignItems: "center",
      marginTop: "2rem",
      marginBottom: "2rem"
    }}>
    <div>Welcome {auth.user}</div>
    <button onClick={handleLogout}> Logout </button>
    </div>
    
    <nav>
        <Link to='details'> Details </Link>
        <Link to='settings'> Settings </Link>
    </nav>
    <Outlet />
    </>
  )
}

export default Profile