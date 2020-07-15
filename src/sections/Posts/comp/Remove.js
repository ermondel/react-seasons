import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePost, resetRemoveStatus } from '../actions/posts';
import { ErrorRemote, SpinnerBig } from '../../../util/UtilImg/comp/UtilImg';
import { ModalWindow, modalClose } from '../../../util/ModalWindow/comp/ModalWindow';

class RemovePostWindow extends Component {
  renderConfirmation() {
    return (
      <div className='remove-post'>
        <p className='remove-post__title'>{this.props.removing.post.title}</p>
        <p className='remove-post__question'>
          Are you sure you want to remove the post?
        </p>
        <div className='remove-post__actions'>
          <button className='remove-post__btn-remove' onClick={this.onRemove}>
            Remove
          </button>
        </div>
      </div>
    );
  }

  renderRemoveSpinner() {
    return (
      <div className='remove-post'>
        <p className='remove-post__title'>{this.props.removing.post.title}</p>
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

  renderRemoveSuccess() {
    return (
      <div className='remove-post'>
        <p className='remove-post__title'>{this.props.removing.post.title}</p>
        <p className='remove-post__success'>Post successfully deleted</p>
      </div>
    );
  }

  renderRemoveError() {
    return (
      <div className='remove-post'>
        <p className='remove-post__title'>{this.props.removing.post.title}</p>
        <div className='remove-post__error-img'>
          <ErrorRemote />
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

  onRemove = () => {
    this.props.removePost(this.props.authData.publicKey, this.props.removing.post);
  };

  onClose = () => {
    this.props.modalClose();
    this.props.resetRemoveStatus();
  };

  renderContent() {
    switch (this.props.removing.status) {
      case 'confirm':
        return this.renderConfirmation();

      case 'removing':
        return this.renderRemoveSpinner();

      case 'success':
        return this.renderRemoveSuccess();

      case 'failure':
        return this.renderRemoveError();

      case 'default':
      default:
        return null;
    }
  }

  render() {
    const { visible, authData } = this.props;

    return (
      <ModalWindow visible={visible} onWindowClose={this.onClose} styleType='common'>
        {authData.publicKey ? this.renderContent() : this.renderAuthError()}
      </ModalWindow>
    );
  }
}

const mapStateToProps = (state) => ({
  visible: state.modalWindow,
  removing: state.postsRemoving,
  authData: state.postsAuth,
});

export default connect(mapStateToProps, {
  modalClose,
  removePost,
  resetRemoveStatus,
})(RemovePostWindow);
