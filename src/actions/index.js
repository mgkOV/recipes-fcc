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

export const addPrivatRecipe = (recipe) => {
  const recipes = api.addPrivatRecipe(recipe);
  return {
    type: C.ADD_RECIPE,
    payload: recipes
  }
}

export const fetchNewRecipe = (searchStr, recipesLength) => {
  const recipes = api.fetchNewRecipe(searchStr);
  return (dispatch) => {
    recipes.then(recipes => {
      dispatch({
        type: C.FETCH_NEW_RECIPE,
        payload: recipes
      });

      if (recipes.length === recipesLength) {
        dispatch({
          type: C.BAD_REQUEST_SHOW,
          payload: true
        });

        window.setTimeout(() => {
          dispatch({
            type: C.BAD_REQUEST_HIDE,
            payload: false
          });
        }, 2000);
      }
    })
  }
}
