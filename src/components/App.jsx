import React from 'react';

import RecipeList from 'RecipeList';
import SearchBar from 'SearchBar';
import AddRecipeButton from 'AddRecipeButton';

export default (props) => {
  return (
    <div className="app">
      <AddRecipeButton />
      <SearchBar />
      <RecipeList />
    </div>
  );
}
