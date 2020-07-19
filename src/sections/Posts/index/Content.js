import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPosts, fetchPostsAuth, resetStatus } from '../actions/posts';
import List from './List';
import Add from './Add';
import View from './View';
import Remove from './Remove';
import {
  AuthSpinner,
  AuthSuccess,
  AuthError,
  LoadingSpinner,
  LoadingError,
} from './Service';

class Content extends Component {
  componentDidMount() {
    if (!this.props.postsList.length) {
      if (this.props.authData.publicKey) {
        this.props.fetchPosts(this.props.authData.publicKey);
      } else {
        this.props.fetchPostsAuth();
      }
    }
  }

  componentWillUnmount() {
    if (this.props.postsStatus !== 'default') this.props.resetStatus();
  }

  renderContent() {
    switch (this.props.postsStatus) {
      case 'auth':
        return <AuthSpinner />;

      case 'allow':
        return <AuthSuccess />;

      case 'deny':
        return <AuthError />;

      case 'loading':
        return <LoadingSpinner />;

      case 'failure':
        return <LoadingError />;

      case 'success':
      default:
        return (
          <Switch>
            <Route path='/posts' exact component={List} />
            <Route path='/posts/add' exact component={Add} />
            <Route path='/posts/:id' exact component={View} />
          </Switch>
        );
    }
  }

  render() {
    return (
      <div className='content'>
        <div className='content-wrap'>
          {this.renderContent()}
          <Remove />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  postsStatus: state.postsStatus,
  postsList: state.postsList,
  authData: state.postsAuth,
});

export default connect(mapStateToProps, {
  fetchPosts,
  fetchPostsAuth,
  resetStatus,
})(Content);
