import axios from 'axios';
import _ from 'lodash';

const verifyLocalData = (data) => {
  if ( !data || !(_.isArray(data)))  return false;
  if(data.ingredients) {
    return _.isArray(data.ingredients);
  }
  return true;
}

const parseRecipes = (recipesString) => {
  try {
    return JSON.parse(recipesString)
  } catch(e) {
    console.log(e);
  }
  return null;
}

const api = {
  getRecipes() {
    let recipesString = localStorage.getItem('recipes');
    const url = '/api/recipes';

    let recipes = parseRecipes(recipesString);

    if(verifyLocalData(recipes)) {
      return recipes;
    } else {
      recipes = axios.get(url)

      recipes.then(recipes => {
        localStorage.setItem('recipes', JSON.stringify(recipes.data));
      });

      return recipes;
    }
  },

  getNewRecipe: '',
  setReciipe: '',

  deleteRecipe(id) {
    let recipesString = localStorage.getItem('recipes');
    let recipes = parseRecipes(recipesString);

    if (recipes) {
      recipes = recipes.filter(recipe => recipe.recipe_id !== id);

      localStorage.setItem('recipes', JSON.stringify(recipes));
      return recipes;
    }
    return [];

  }
}

export default api
