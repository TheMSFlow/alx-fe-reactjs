import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'

function App() {

  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<HomePage />}> Homepage </Route>
        <Route path="/recipe/:id" element={<RecipeDetail />}> Recipe Details </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
