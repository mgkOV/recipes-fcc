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

export const showModal = () => {
  return {
    type: C.SHOW_MODAL,
    payload: true
  }
}

export const hideModal = () => {
  return {
    type: C.HIDE_MODAL,
    payload: false
  }
}

export const editRecipe = (recipe) => {
  const recipes = api.editRecipe(recipe);
  return {
    type: C.EDIT_RECIPE,
    payload: recipes
  }
}
