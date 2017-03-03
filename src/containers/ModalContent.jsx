import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../actions';

class ModalContent extends Component {
  hideModal() {
    this.props.hideModal();
  }
  render() {
    return (
      <div className="modal-content">
        <button className="allert button" onClick={this.hideModal.bind(this)}>
          Close
        </button>
      </div>
    );
  }
}

export default connect(null, { hideModal })(ModalContent)
