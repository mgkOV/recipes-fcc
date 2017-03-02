import React, { Component } from 'react';
import { Link } from 'react-router';
import recipes from '../data.json';


class RecipeView extends Component {

  renderIngredients(ingredients) {
    return (
      ingredients.map((ingredient, idx) => (
        <li key={idx}><div className="ingredient">{ingredient}</div></li>
      ))
    )
  }
  render() {
    const recipe = this.props.recipes.filter( recipe => {
      return recipe.recipe_id === this.props.params.id.toString();
    } );

    const { image_url, title, ingredients } = recipe[0];

    return (
        <div className="recipe-view">
          <div className="recipe-view-img" style={ {backgroundImage: 'url(' + image_url + ')' } } />

          <div className="recipe-view-text">
            <h2>{ title }</h2>
            <ol>
              {this.renderIngredients(ingredients)}
            </ol>
          </div>
          <div className="buttons">
            <Link to="/">
              <button className="success button">
                <i className="fa fa-arrow-circle-left" aria-hidden="true" />
                Back To Recipes List
              </button>
            </Link>
            <button className="button">
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              Edit
            </button>
            <Link to="/">
              <button className="alert button">
                <i className="fa fa-times" aria-hidden="true"></i>
                Delete
              </button>
            </Link>
          </div>
        </div>
    );
  }
}

RecipeView.defaultProps = {
  recipes: recipes
}

export default RecipeView
