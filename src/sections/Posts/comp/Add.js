import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createPost, addingPostReset, initAuth } from '../actions/posts';
import AddForm from './AddForm';
import AuthError from './AuthError';
import AuthSpinner from './AuthSpinner';
import SavingSpinner from './SavingSpinner';
import SavingError from './SavingError';

class Add extends Component {
  componentDidMount() {
    if (!this.props.auth.publicKey) this.props.initAuth();
  }

  componentWillUnmount() {
    if (this.props.post.mode !== 'default') this.props.addingPostReset();
  }

  addPost = (newValues) => {
    this.props.createPost(this.props.auth.publicKey, newValues);
  };

  renderContent() {
    switch (this.props.post.mode) {
      case 'saving':
        return <SavingSpinner />;

      case 'failure':
        return <SavingError />;

      case 'success':
        return <Redirect to='/posts' />;

      case 'auth':
        return <AuthSpinner />;

      case 'deny':
        return <AuthError />;

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
