import React, { Component } from 'react';
import RecipeListItem from 'RecipeListItem';
import { connect } from 'react-redux';


import { fetchRecipes } from '../actions';


class RecipeList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchRecipes();
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
    const transitionOptions = {
      transitionName: "fade",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    };

    return (
      <div className="recipe-list">
          {this.renderRecipeList()}
      </div>
    );
  }
}

const mapStateToProps = ({ recipes }) => (
  { recipes }
)

export default connect(mapStateToProps, { fetchRecipes } )(RecipeList);
