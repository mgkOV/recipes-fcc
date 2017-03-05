import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { showModal } from '../actions';
import Modal from 'Modal';
import ModalContent from 'ModalContent';

class AddRecipeButton extends Component {
  renderModal() {
    if (this.props.modal) {

      return (
        <Modal key="modal">
          <ModalContent recipe_id={moment().format('x')} privatRecipe={true} />
        </Modal>
      );
    }
    return null;
  }

  showModal() {
    this.props.showModal();
  }

  render() {
    return(
      <div className='add-recipe' onClick={this.showModal.bind(this)}>
        <p>Add Your Recipe</p>
        {this.renderModal()}
      </div>
    );
  }
}

const mapStateToProps = ({ modal }) => (
  { modal }
)

export default connect(mapStateToProps, { showModal })(AddRecipeButton)
