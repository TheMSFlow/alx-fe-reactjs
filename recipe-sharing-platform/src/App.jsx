import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'
import NavBar from './components/NavBar'
import AddRecipeForm from './components/AddRecipeForm'

function App() {

  return (
    <BrowserRouter>
    <NavBar />
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
