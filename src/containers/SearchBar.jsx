import React, { Component } from 'react';
import { fetchNewRecipe } from '../actions';
import { connect } from 'react-redux';

class SearchBar extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const searchStr = this.searchInput.value;
    this.searchInput.value = '';
    this.props.fetchNewRecipe(encodeURIComponent(searchStr));
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.handleSubmit.bind(this)}>
        <input
          className="input-group-field"
          type="text"
          placeholder="Type ingridients here (separated by commas)..."
          ref={input => this.searchInput = input}
        />
        <div className="input-group-button">
          <input type="submit" className="button" value="Search Recipes" />
        </div>
      </form>
    )
  }
}

export default connect(null, { fetchNewRecipe })(SearchBar);
