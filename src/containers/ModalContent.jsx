import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../actions';

class ModalContent extends Component {
  hideModal() {
    this.modalContent.className = "modal-content disappear";
    this.modalBg.className = "modal-bg bg-disappear"
    window.setTimeout(() => {
      this.props.hideModal();
    }, 450);
  }

  saveChanges() {

  }

  render() {
    const { title, ingredients } = this.props;

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

export default connect(null, { hideModal })(ModalContent)
