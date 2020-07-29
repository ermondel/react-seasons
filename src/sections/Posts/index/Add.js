import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createPost, resetAddStatus } from '../actions/posts';
import AddForm from './AddForm';
import { SavingSpinner, SavingError } from './Service';

class Add extends Component {
  componentWillUnmount() {
    if (this.props.status !== 'default') this.props.resetAddStatus();
  }

  addPost = (newValues) => {
    this.props.createPost(this.props.authData.publicKey, newValues);
  };

  renderContent() {
    switch (this.props.status) {
      case 'saving':
        return <SavingSpinner />;

      case 'success':
        return <Redirect to='/posts' />;

      case 'failure':
        return <SavingError />;

      case 'default':
      default:
        return <AddForm onSubmit={this.addPost} />;
    }
  }

  render() {
    return (
      <div>
        <h2 className='section-title'>New post</h2>

        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  status: state.postsAdding,
  authData: state.postsAuth,
});

export default connect(mapStateToProps, { createPost, resetAddStatus })(Add);
