import api from '../api';
import C from './constants';


export const fetchRecipes = () => {
  const recipes = api.getRecipes();

  return {
    type: C.FETCHING_RECIPES,
    payload: recipes
  }
}

export const deleteRecipe = (id) => {
  const recipes = api.deleteRecipe(id);

  return {
    type: C.DELETE_RECIPES,
    payload: recipes
  }
}
