import axios from 'axios';
import _ from 'lodash';

const api = {
  getRecipes() {
    let recipes = localStorage.getItem('recipes');
    const url = '';

    const varifyLocalData = (data) => {
      if ( !data || !(_.isArray(data)) )  return false;
      if (data.length === 0) return true;
      
    }

    if(verifyLocalData) {
      return: recipes
    } else {
      recipes = axios.get(url)

      recipes.then(recipes => {
        localStorage.setItem('recipes', recipes);
      });

      return recipes;
    }
  },
  getNewRecipe: '',
  setReciipe: '',
  deleteRecipe: ''
}
