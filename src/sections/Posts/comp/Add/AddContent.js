import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createPost, setAddingDefaultState } from '../../actions/posts';
import PostsAddForm from './PostsAddForm';
import SpinnerBig from '../../../../app/SpinnerImg/comp/SpinnerBig';
import ErrorRemoteImg from '../../../../app/ErrorImg/comp/ErrorRemoteImg';

class AddContent extends Component {
  componentWillUnmount() {
    if (this.props.mode !== 'default') {
      this.props.setAddingDefaultState();
    }
  }

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

  renderContent() {
    switch (this.props.mode) {
      case 'loading':
        return this.renderSpinner();

      case 'failure':
        return this.renderError();

      case 'success':
        return <Redirect to='/posts' />;

      case 'default':
      default:
        return <PostsAddForm onSubmit={this.props.createPost} />;
    }
  }

  render() {
    return (
      <div className='content'>
        <div className='content-wrap'>
          <h2>New post</h2>

          {this.renderContent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mode: state.postsAddingMode,
});

export default connect(mapStateToProps, {
  createPost,
  setAddingDefaultState,
})(AddContent);
