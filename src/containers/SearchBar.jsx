import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form className="input-group">
        <input className="input-group-field" type="text" placeholder="Type Recipe Here..."/>
        <div className="input-group-button">
          <input type="submit" className="button" value="Search Recipes" />
        </div>
      </form>
    )
  }
}

export default SearchBar
