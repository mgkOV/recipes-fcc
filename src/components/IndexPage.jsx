import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipeList from 'RecipeList';
import SearchBar from 'SearchBar';
import AddRecipeButton from 'AddRecipeButton';


class IndexPage extends Component {

  render() {
    return (
      <div>
        <AddRecipeButton />
        <SearchBar />
        <RecipeList />
      </div>
    );
  }
}

export default IndexPage
