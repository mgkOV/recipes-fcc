import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';


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

  addPrivatRecipe(recipe){
    recipe.image_url = 'http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg';
    let recipesString = localStorage.getItem('recipes');
    let recipes = parseRecipes(recipesString);
    recipes.unshift(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    return recipes;
  },

  fetchNewRecipe(searchStr) {
    const recipe = axios.get(`/api/recipes/${searchStr}`);

    return recipe.then(recipe => {
      let recipesString = localStorage.getItem('recipes');
      let recipes = parseRecipes(recipesString);

      if (recipe.data.recipe) {
        let newRecipe = _.pick(recipe.data.recipe, ["ingredients", "image_url", "title"]);
        newRecipe.recipe_id = moment().format('x');

        recipes.unshift(newRecipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
        return recipes;
      }
      console.log('bad request');
      return recipes;
    });

  },

  editRecipe(editedRecipe) {
    let recipesString = localStorage.getItem('recipes');
    let recipes = parseRecipes(recipesString);

    if (recipes) {
      recipes = recipes.map(recipe => {
        if (recipe.recipe_id === editedRecipe.recipe_id) {
          return editedRecipe;
        }

        return recipes;
      });

      localStorage.setItem('recipes', JSON.stringify(recipes));
      return recipes;
    }
    return [];
  },

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
