import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  removePostAsk,
  viewStateReset,
  fetchPostsNew,
  authAndFetchPostsNew,
} from '../actions/posts';
import { modalOpen } from '../../../util/ModalWindow/comp/ModalWindow';
import LoadingSpinner from './LoadingSpinner';
import AuthSpinner from './AuthSpinner';
import LoadingError from './LoadingError';
import AuthError from './AuthError';
import AuthSuccess from './AuthSuccess';
import PostItem from './PostItem';

class View extends Component {
  componentWillUnmount() {
    if (this.props.viewState !== 'default') this.props.viewStateReset();
  }

  componentDidMount() {
    const { postList, authData, fetchPostsNew, authAndFetchPostsNew } = this.props;

    if (!postList.length) {
      if (authData.publicKey) {
        fetchPostsNew(authData.publicKey, 'VIEW');
      } else {
        authAndFetchPostsNew('VIEW');
      }
    }
  }

  renderPost() {
    const { match, postList, removePostAsk, modalOpen } = this.props;

    let post;

    if (postList.length) {
      post = postList.find((el) => {
        return String(el.id) === match.params.id;
      });
    }

    return post ? (
      <PostItem
        post={post}
        onRemoveClick={() => {
          removePostAsk(post.id, post.title);
          modalOpen();
        }}
      />
    ) : (
      <h2>Post not found</h2>
    );
  }

  renderContent() {
    switch (this.props.viewState) {
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

      case 'deleted':
        return <Redirect to='/posts' />;

      case 'success':
      case 'default':
      default:
        return this.renderPost();
    }
  }

  render() {
    return (
      <div className='content'>
        <div className='content-wrap'>{this.renderContent()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  postList: state.postsListNew,
  viewState: state.postsViewStateNew,
  authData: state.postsAuthNew,
});

export default connect(mapStateToProps, {
  removePostAsk,
  modalOpen,
  viewStateReset,
  fetchPostsNew,
  authAndFetchPostsNew,
})(View);
