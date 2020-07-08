import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalWindow from '../../../app/ModalWindow/comp/ModalWindow';
import { modalClose } from '../../../app/ModalWindow/actions/ModalWindow';
import SpinnerBig from '../../../app/SpinnerImg/comp/SpinnerBig';
import ErrorRemoteImg from '../../../app/ErrorImg/comp/ErrorRemoteImg';
import { removePost, removePostReset } from '../actions/posts';

class RemovePostWindow extends Component {
  renderConfirmation() {
    const { removePost, removing, auth } = this.props;

    return (
      <div className='remove-post'>
        <p className='remove-post__title'>{this.props.removing.title}</p>
        <p className='remove-post__question'>
          Are you sure you want to remove the post?
        </p>
        <div className='remove-post__actions'>
          <button
            className='remove-post__btn-remove'
            onClick={() => {
              removePost(auth.publicKey, removing.id, removing.title);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }

  renderSpinner() {
    return (
      <div className='remove-post'>
        <div className='remove-post__spinner-img'>
          <SpinnerBig />
        </div>
        <div className='remove-post__spinner-text'>
          <p>Request to a remote server</p>
          <p>This may take some time</p>
          <p>Please wait</p>
        </div>
      </div>
    );
  }

  renderError() {
    return (
      <div className='remove-post'>
        <div className='remove-post__error-img'>
          <ErrorRemoteImg />
        </div>
        <div className='remove-post__error-text'>
          <p>The remote server is not responding.</p>
          <p>Perhaps it is overloaded with requests.</p>
          <p>Please come back later.</p>
        </div>
      </div>
    );
  }

  renderAuthError() {
    return (
      <div className='auth-error__message'>
        <div className='auth-error__sign'>!</div>
        You are not authorized to perform this operation
      </div>
    );
  }

  renderSuccessful() {
    return (
      <div className='remove-post'>
        <p className='remove-post__title'>{this.props.removing.title}</p>
        <p className='remove-post__success'>Post successfully deleted</p>
      </div>
    );
  }

  onClose = () => {
    this.props.modalClose();
    this.props.removePostReset();
  };

  renderContent() {
    switch (this.props.removing.mode) {
      case 'ask':
        return this.renderConfirmation();

      case 'loading':
        return this.renderSpinner();

      case 'success':
        return this.renderSuccessful();

      case 'failure':
        return this.renderError();

      default:
        return null;
    }
  }

  render() {
    const { visible, auth } = this.props;

    return (
      <ModalWindow visible={visible} onWindowClose={this.onClose} styleType='common'>
        {auth.publicKey ? this.renderContent() : this.renderAuthError()}
      </ModalWindow>
    );
  }
}

const mapStateToProps = (state) => ({
  visible: state.modalWindow,
  removing: state.postsRemoving,
  auth: state.postsAuth,
});

export default connect(mapStateToProps, {
  modalClose,
  removePost,
  removePostReset,
})(RemovePostWindow);
