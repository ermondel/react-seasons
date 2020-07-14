import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { initAuthNew, createPost, addStateReset } from '../actions/posts';
import AddForm from './AddForm';
import AuthError from './AuthError';
import AuthSpinner from './AuthSpinner';
import SavingSpinner from './SavingSpinner';
import SavingError from './SavingError';

class Add extends Component {
  componentDidMount() {
    if (!this.props.authData.publicKey) this.props.initAuthNew('ADD');
  }

  componentWillUnmount() {
    if (this.props.addState !== 'default') this.props.addStateReset();
  }

  addPost = (newValues) => {
    this.props.createPost(this.props.authData.publicKey, newValues);
  };

  renderContent() {
    switch (this.props.addState) {
      case 'auth':
        return <AuthSpinner />;

      case 'deny':
        return <AuthError />;

      case 'saving':
        return <SavingSpinner />;

      case 'success':
        return <Redirect to='/posts' />;

      case 'failure':
        return <SavingError />;

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
  addState: state.postsAddStateNew,
  authData: state.postsAuthNew,
});

export default connect(mapStateToProps, {
  initAuthNew,
  createPost,
  addStateReset,
})(Add);
