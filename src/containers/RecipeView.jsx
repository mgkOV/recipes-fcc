import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Modal from 'Modal';
import ModalContent from 'ModalContent';

import { deleteRecipe, fetchRecipes, showModal } from '../actions';


class RecipeView extends Component {
  constructor(props) {
    super(props);

    this.renderModal = this.renderModal.bind(this);
  }

  componentWillMount() {
    this.props.fetchRecipes();
  }

  renderIngredients(ingredients) {
    return (
      ingredients.map((ingredient, idx) => (
        <li key={idx}><div className="ingredient">{ingredient}</div></li>
      ))
    )
  }

  onClickDelete(){
    this.props.deleteRecipe(this.props.params.id.toString());
  }

  showModal() {
    this.props.showModal();
  }

  renderModal() {
    if (this.props.modal) {

      const recipe = this.props.recipes.filter( recipe => {
        return recipe.recipe_id === this.props.params.id.toString();
      } );

      return (
        <Modal key="modal">
          <ModalContent {...recipe[0]} />
        </Modal>
      );
    }
    return null;
  }

  render() {
    const recipe = this.props.recipes.filter( recipe => {
      return recipe.recipe_id === this.props.params.id.toString();
    } );

    if (!recipe[0]) return null;

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
                Back
              </button>
            </Link>
            <button className="button" onClick={this.showModal.bind(this)}>
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              Edit
            </button>
            <Link to="/">
              <button className="alert button" onClick={this.onClickDelete.bind(this)}>
                <i className="fa fa-times" aria-hidden="true"></i>
                Delete
              </button>
            </Link>
          </div>
            {this.renderModal()}
        </div>
    );
  }
}

const mapStateToProps = ({ recipes, modal }) => (
  { recipes, modal }
)

export default connect(mapStateToProps, { deleteRecipe, fetchRecipes, showModal })(RecipeView)
