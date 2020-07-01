import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createPost, addingPostReset } from '../actions/posts';
import AddForm from './AddForm';
import SpinnerBig from '../../../app/SpinnerImg/comp/SpinnerBig';
import ErrorRemoteImg from '../../../app/ErrorImg/comp/ErrorRemoteImg';

class AddContent extends Component {
  componentWillUnmount() {
    if (this.props.post.mode !== 'default') {
      this.props.addingPostReset();
    }
  }

  renderSpinner() {
    return (
      <div className='posts-spinner'>
        <SpinnerBig />
        <div>
          <p>{this.props.post.title}</p>
          <p>Saving data to the remote server</p>
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
          <p>{this.props.post.title}</p>
          <p>Error saving</p>
          <p>The remote server is not responding</p>
          <p>Perhaps it is overloaded with requests</p>
          <p>Please come back later</p>
        </div>
      </div>
    );
  }

  renderContent() {
    const { post, createPost } = this.props;

    switch (post.mode) {
      case 'loading':
        return this.renderSpinner();

      case 'failure':
        return this.renderError();

      case 'success':
        return <Redirect to='/posts' />;

      case 'default':
      default:
        return <AddForm onSubmit={createPost} />;
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
});

export default connect(mapStateToProps, {
  createPost,
  addingPostReset,
})(AddContent);
