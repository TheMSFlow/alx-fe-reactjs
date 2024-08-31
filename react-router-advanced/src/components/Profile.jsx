import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <>
    <div>Profile</div>
    <nav>
        <Link to='details'> Details </Link>
        <Link to='settings'> Settings </Link>
    </nav>
    <Outlet />
    </>
  )
}

export default Profile