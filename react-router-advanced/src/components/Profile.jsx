import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
// import ProfileDetails from './components/ProfileDetails'
// import ProfileSettings from './components/ProfileSettings'

const Profile = () => {
  return (
    <>
    <div>Profile Page </div>
    <nav>
        <Link to='details'> Details </Link>
        <Link to='settings'> Settings </Link>
    </nav>
    <Outlet />
    </>
  )
}

export default Profile