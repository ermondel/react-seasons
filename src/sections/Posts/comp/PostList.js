import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchPosts,
  authAndFetchPosts,
  removePostAsk,
  initAuth,
} from '../actions/posts';
import SpinnerBig from '../../../app/SpinnerImg/comp/SpinnerBig';
import ErrorRemoteImg from '../../../app/ErrorImg/comp/ErrorRemoteImg';
import { modalOpen } from '../../../app/ModalWindow/actions/ModalWindow';
import PostItem from './PostItem';

class PostList extends Component {
  componentDidMount() {
    if (!this.props.posts.list.length) {
      if (this.props.auth.publicKey) {
        this.props.fetchPosts(this.props.auth.publicKey);
      } else {
        this.props.authAndFetchPosts();
      }
    }
  }

  renderLoadingSpinner() {
    return (
      <div className='posts-spinner'>
        <SpinnerBig />
        <div>
          <p className='posts-spinner__loading-message'>
            Request data from a remote server
          </p>
          <p>This may take some time</p>
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

  renderLoadingError() {
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

  authSuccess() {
    return <p>Authorization successful</p>;
  }

  filterList(posts, search) {
    search = search.toLowerCase();
    return posts.filter((post) => {
      const str = `${post.title} ${post.categories}`.toLowerCase();
      return str.indexOf(search) >= 0;
    });
  }

  renderList() {
    const { posts, removePostAsk, modalOpen, auth, search } = this.props;
    const postList = search ? this.filterList(posts.list, search) : posts.list;

    return postList.length ? (
      <div className='pst-list'>
        {postList.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            showRemoveBtn={auth.publicKey ? true : false}
            onRemoveClick={() => {
              removePostAsk(post.id, post.title);
              modalOpen();
            }}
          />
        ))}
      </div>
    ) : (
      <p>No posts found</p>
    );
  }

  render() {
    switch (this.props.posts.mode) {
      case 'loading':
        return this.renderLoadingSpinner();

      case 'failure':
        return this.renderLoadingError();

      case 'auth':
        return this.renderAuthSpinner();

      case 'deny':
        return this.renderAuthError();

      case 'allow':
        return this.authSuccess();

      case 'success':
      case 'default':
      default:
        return this.renderList();
    }
  }
}

const mapStateToProps = (state) => ({
  posts: state.postsList,
  search: state.postsSearch,
  auth: state.postsAuth,
});

export default connect(mapStateToProps, {
  fetchPosts,
  authAndFetchPosts,
  removePostAsk,
  modalOpen,
  initAuth,
})(PostList);
