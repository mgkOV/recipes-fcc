import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal, editRecipe, addPrivatRecipe } from '../actions';
import moment from 'moment';

class ModalContent extends Component {
  hideModal() {
    this.modalContent.className = "modal-content disappear";
    this.modalBg.className = "modal-bg bg-disappear"
    window.setTimeout(() => {
      this.props.hideModal();
    }, 450);
  }

  saveChanges() {
    const { image_url, recipe_id } = this.props
    const title = this.title.value;
    const ingredients = this.ingredients.value
      .split(';')
      .filter(i => i.replace(/^\s+/, '').replace(/\s+$/, ''));
    if (this.props.privatRecipe) {
      this.props.addPrivatRecipe({ recipe_id, title, ingredients });
    } else {
      this.props.editRecipe({image_url, recipe_id, title, ingredients });
    }
    this.hideModal();
  }

  render() {
    const { title, ingredients } = this.props;
    console.log(this.props.recipe_id);

    return (
      <div>
        <div className="modal-bg bg-appear" ref={item => this.modalBg = item}></div>
        <div className="modal-content appear" ref={item => this.modalContent = item}>
          <form>
            <label>Recipe Title
              <input type="text" defaultValue={title} ref={item => this.title = item} />
            </label>
            <label>
              Ingredients
              <textarea defaultValue={ingredients.join(';')} ref={item => this.ingredients = item} rows="7"/>
              <span className="helper-text">* Divide ingredients by semicolon</span>
            </label>
          </form>
          <div className="controls">
            <button className="button" onClick={this.saveChanges.bind(this)}>
              Save
            </button>
            <button className="alert button" onClick={this.hideModal.bind(this)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ModalContent.defaultProps = {
  image_url: '',
  recipe_id: '',
  title: '',
  ingredients: []
};

export default connect(null, { hideModal, editRecipe, addPrivatRecipe })(ModalContent)
