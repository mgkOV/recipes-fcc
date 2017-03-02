import React, { Component } from 'react';
import { Link } from 'react-router';


class RecipeView extends Component {
  render() {
    return (
        <div className="recipe-view">
          Recipe 1
          <br />
          <Link to="/">
            <button className="success button">Back To Recipes List</button>
          </Link>
        </div>
    );
  }
}

export default RecipeView
