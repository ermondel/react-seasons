import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/posts';
import PostsAddForm from './PostsAddForm';
import SpinnerBig from '../../../../app/SpinnerImg/comp/SpinnerBig';
import ErrorRemoteImg from '../../../../app/ErrorImg/comp/ErrorRemoteImg';

class AddContent extends Component {
  renderSpinner() {
    return (
      <div className='posts-spinner'>
        <SpinnerBig />
        <div>
          <p>Sending data to a remote server</p>
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

  renderSuccessfulMessage() {
    return <p>The new post was saved successfully.</p>;
  }

  render() {
    const { saved, spinner, error, createPost } = this.props;

    return (
      <div className='content'>
        <div className='content-wrap'>
          <h2>New post</h2>

          {spinner && this.renderSpinner()}
          {error && this.renderError()}
          {!spinner && !error && !saved && <PostsAddForm onSubmit={createPost} />}
          {saved && this.renderSuccessfulMessage()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  saved: state.postsAdd,
  spinner: state.postsSpinner,
  error: state.postsError,
});

export default connect(mapStateToProps, { createPost })(AddContent);
