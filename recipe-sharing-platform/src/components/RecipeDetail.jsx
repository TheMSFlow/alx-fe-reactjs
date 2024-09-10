import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import Data from '../data.json'

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe,setRecipe] = useState(null)

  useEffect(() => {
    const recipe = Data.find(recipe => recipe.id === Number(id))
      setRecipe(recipe);
  },[id])

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