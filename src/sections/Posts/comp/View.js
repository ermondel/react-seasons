import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  removePostAsk,
  readPostReset,
  fetchPosts,
  authAndFetchPosts,
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
    if (this.props.read.mode !== 'default') {
      this.props.readPostReset();
    }
  }

  componentDidMount() {
    if (!this.props.list.length) {
      if (this.props.auth.publicKey) {
        this.props.fetchPosts(this.props.auth.publicKey);
      } else {
        this.props.authAndFetchPosts();
      }
    }
  }

  renderPost() {
    let post;

    if (this.props.list.length) {
      post = this.props.list.find((el) => {
        return String(el.id) === this.props.match.params.id;
      });
    }

    return post ? (
      <PostItem
        post={post}
        onRemoveClick={() => {
          this.props.removePostAsk(post.id, post.title);
          this.props.modalOpen();
        }}
      />
    ) : (
      <h2>Post not found</h2>
    );
  }

  render() {
    let content;

    switch (this.props.read.mode) {
      case 'auth':
        content = <AuthSpinner />;
        break;

      case 'allow':
        content = <AuthSuccess />;
        break;

      case 'deny':
        content = <AuthError />;
        break;

      case 'loading':
        content = <LoadingSpinner />;
        break;

      case 'failure':
        content = <LoadingError />;
        break;

      case 'deleted':
        return <Redirect to='/posts' />;

      case 'success':
      case 'default':
      default:
        content = this.renderPost();
    }

    return (
      <div className='content'>
        <div className='content-wrap'>{content}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.postsList.list,
  read: state.postsReading,
  auth: state.postsAuth,
});

export default connect(mapStateToProps, {
  removePostAsk,
  modalOpen,
  readPostReset,
  fetchPosts,
  authAndFetchPosts,
})(View);
