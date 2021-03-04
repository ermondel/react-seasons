import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePost, resetRemoveStatus } from '../actions/posts';
import { ModalWindow, modalClose } from '@modal/ModalWindow';
import { RemoveSpinner, RemoveSuccess, RemoveError, AuthError } from './Service';

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
        return <RemoveSpinner title={this.props.removing.post.title} />;

      case 'success':
        return <RemoveSuccess title={this.props.removing.post.title} />;

      case 'failure':
        return <RemoveError title={this.props.removing.post.title} />;

      case 'default':
      default:
        return null;
    }
  }

  render() {
    const { visible, authData } = this.props;

    return (
      <ModalWindow visible={visible} onWindowClose={this.onClose} styleType='common'>
        {authData.publicKey ? this.renderContent() : <AuthError />}
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
