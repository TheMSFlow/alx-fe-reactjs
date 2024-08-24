// RecipeList.jsx
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import { useEffect } from 'react';

const RecipeList = () => {
  const { recipes, filteredRecipes, searchTerm, filterRecipes } = useRecipeStore(state => ({
    recipes: state.recipes, // Add this to access all recipes
    filteredRecipes: state.filteredRecipes,
    searchTerm: state.searchTerm,
    filterRecipes: state.filterRecipes
  }));

  // Trigger filtering whenever the search term changes
  useEffect(() => {
    if (searchTerm.trim() === '') {
      // If searchTerm is empty, show all recipes
      useRecipeStore.setState({ filteredRecipes: recipes });
    } else {
      // Otherwise, apply the filtering
      filterRecipes();
    }
  }, [searchTerm, filterRecipes, recipes]);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No recipes found matching your search criteria.</p>
      )}
    </div>
  );
};

export default RecipeList;
