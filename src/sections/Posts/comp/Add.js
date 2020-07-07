import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createPost, addingPostReset, initAuth } from '../actions/posts';
import AddForm from './AddForm';
import SpinnerBig from '../../../app/SpinnerImg/comp/SpinnerBig';
import ErrorRemoteImg from '../../../app/ErrorImg/comp/ErrorRemoteImg';

class Add extends Component {
  componentDidMount() {
    if (!this.props.auth.publicKey) this.props.initAuth();
  }

  componentWillUnmount() {
    if (this.props.post.mode !== 'default') this.props.addingPostReset();
  }

  renderSavingSpinner() {
    return (
      <div className='posts-spinner'>
        <SpinnerBig />
        <div>
          <p>{this.props.post.title}</p>
          <p className='posts-spinner__loading-message'>
            Saving data to the remote server
          </p>
          <p>Please wait</p>
        </div>
      </div>
    );
  }

  renderAuthSpinner() {
    return (
      <div className='posts-spinner'>
        <SpinnerBig />
        <div>
          <p className='posts-spinner__auth-message'>Authorization in progress</p>
          <p>This may take some time</p>
          <p>Please wait</p>
        </div>
      </div>
    );
  }

  renderSavingError() {
    return (
      <div className='posts-error'>
        <ErrorRemoteImg />
        <div>
          <p>{this.props.post.title}</p>
          <p>Error saving</p>
          <p>The remote server is not responding</p>
          <p>Perhaps it is overloaded with requests</p>
          <p>Please come back later</p>
        </div>
      </div>
    );
  }

  renderAuthError() {
    return (
      <div className='posts-error'>
        <ErrorRemoteImg />
        <div>
          <p>Access is denied</p>
          <p>Please contact the administrator</p>
        </div>
      </div>
    );
  }

  addPost = (newValues) => {
    this.props.createPost(this.props.auth.publicKey, newValues);
  };

  renderContent() {
    switch (this.props.post.mode) {
      case 'saving':
        return this.renderSavingSpinner();

      case 'failure':
        return this.renderSavingError();

      case 'success':
        return <Redirect to='/posts' />;

      case 'auth':
        return this.renderAuthSpinner();

      case 'deny':
        return this.renderAuthError();

      case 'allow':
      case 'default':
      default:
        return <AddForm onSubmit={this.addPost} />;
    }
  }

  render() {
    return (
      <div className='content-wrap'>
        <h2>New post</h2>

        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.postsAdding,
  auth: state.postsAuth,
});

export default connect(mapStateToProps, {
  createPost,
  addingPostReset,
  initAuth,
})(Add);
