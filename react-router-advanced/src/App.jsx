import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'
import Blog from './components/Blog'

function App() {

  return (
    <>
    <Navbar />
     <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/Profile" element={<Profile />}> 
          <Route path= "details" element={<ProfileDetails />} />
          <Route path= "settings" element={<ProfileSettings />} />
        </ Route>
        <Route path='/blog' element={<Blog />} />
     </Routes>
    </>
  )
}

export default App
