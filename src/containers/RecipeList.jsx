import React, { Component } from 'react';
import RecipeListItem from 'RecipeListItem';
import recipes from '../data.json';

class RecipeList extends Component {
  constructor(props) {
    super(props);
  }

  renderRecipeList() {
    const { recipes } = this.props;
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

RecipeList.defaultProps = {
  recipes: recipes
};

export default RecipeList
