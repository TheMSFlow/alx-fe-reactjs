import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Data from '../data.json'

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const recipe = Data.find(recipe => recipe.id === Number(id))
  if (!recipe) {
    return <div> Recipe not found</div>
  }

  return (
    <>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} />
      <p>{recipe.summary}</p>
      <h2>Ingredients: {recipe.ingredients}</h2>
      <h3>Instructions: {recipe.instructions}</h3>
    </>

  )
}

export default RecipeDetail