import React, { Component } from 'react';
import { fetchNewRecipe } from '../actions';
import { connect } from 'react-redux';

class SearchBar extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const searchStr = this.searchInput.value;
    this.searchInput.value = '';
    this.props.fetchNewRecipe(encodeURIComponent(searchStr), this.props.recipes.length);
  }

  showMessage() {
    return (
      this.props.badRequest ?
        <p>
          Cuoldn't found recipes with such ingridient(s)
        </p>
        : null
    );
  }

  render() {
    return (
      <div>
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
        {this.showMessage()}
      </div>
    )
  }
}

const mapDispatchToProps = ({ recipes, badRequest }) => {
  return { recipes, badRequest }
}

export default connect(mapDispatchToProps, { fetchNewRecipe })(SearchBar);
