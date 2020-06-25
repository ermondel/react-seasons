import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalWindow from '../../../../app/ModalWindow/comp/ModalWindow';
import { modalClose } from '../../../../app/ModalWindow/actions/ModalWindow';
import SpinnerBig from '../../../../app/SpinnerImg/comp/SpinnerBig';
import ErrorRemoteImg from '../../../../app/ErrorImg/comp/ErrorRemoteImg';
import { removePost, removePostReset } from '../../actions/posts';

class RemovePostWindow extends Component {
  renderConfirmation() {
    const { removePost, removing } = this.props;

    return (
      <div>
        <p>Are you sure you want to delete the post?</p>
        <p>
          <i>{this.props.removing.title}</i>
        </p>
        <p>
          <button
            onClick={() => {
              removePost(removing.id, removing.title);
            }}
          >
            Remove
          </button>
        </p>
      </div>
    );
  }

  renderSpinner() {
    return (
      <div className='posts-spinner'>
        <SpinnerBig />
        <div>
          <p>Request to a remote server</p>
          <p>This may take some time</p>
          <p>Please wait</p>
        </div>
      </div>
    );
  }

  renderError() {
    return (
      <div className='posts-error'>
        <ErrorRemoteImg />
        <div>
          <p>The remote server is not responding</p>
          <p>Perhaps it is overloaded with requests</p>
          <p>Please come back later</p>
        </div>
      </div>
    );
  }

  renderSuccessful() {
    return (
      <div>
        <p>Post successfully deleted.</p>
        <p>
          <i>{this.props.removing.title}</i>
        </p>
      </div>
    );
  }

  onClose = () => {
    this.props.modalClose();
    this.props.removePostReset();
  };

  render() {
    let content;

    switch (this.props.removing.mode) {
      case 'ask':
        content = this.renderConfirmation();
        break;

      case 'loading':
        content = this.renderSpinner();
        break;

      case 'success':
        content = this.renderSuccessful();
        break;

      case 'failure':
        content = this.renderError();
        break;

      default:
        content = null;
        break;
    }

    return (
      <ModalWindow visible={this.props.visible} onWindowClose={this.onClose}>
        {content}
      </ModalWindow>
    );
  }
}

const mapStateToProps = (state) => ({
  visible: state.modalWindow,
  removing: state.postsRemoving,
});

export default connect(mapStateToProps, {
  modalClose,
  removePost,
  removePostReset,
})(RemovePostWindow);
