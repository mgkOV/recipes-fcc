import React, { Component } from 'react';
import RecipeListItem from 'RecipeListItem';
import recipes from '../data.json';

class RecipeList extends Component {
  constructor(props) {
    super(props);

    this.state = { recipes }
  }

  renderRecipeList() {
    const { recipes } = this.state;
    return (
      recipes.map(recipe => (
        <RecipeListItem {...recipe} key={ recipe.recipe_id }/>
      ))
    );
  }

  render() {
    return (
      <div className="recipe-list">
        {this.renderRecipeList()}
      </div>
    );
  }
}

export default RecipeList
