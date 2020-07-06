import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, removePostAsk, initAuth } from '../actions/posts';
import SpinnerBig from '../../../app/SpinnerImg/comp/SpinnerBig';
import ErrorRemoteImg from '../../../app/ErrorImg/comp/ErrorRemoteImg';
import { modalOpen } from '../../../app/ModalWindow/actions/ModalWindow';
import PostItem from './PostItem';

class PostList extends Component {
  componentDidMount() {
    const { auth, initAuth, postsObj, fetchPosts } = this.props;

    if (auth.publicKey && !postsObj.list.length) {
      fetchPosts(auth.publicKey);
    } else if (!auth.publicKey) {
      initAuth();
    }
  }

  componentDidUpdate() {
    const { auth, postsObj, fetchPosts } = this.props;

    if (postsObj.mode === 'allow' && !postsObj.list.length) {
      fetchPosts(auth.publicKey);
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

  filterList(posts) {
    const searchValue = this.props.searchQuery.toLowerCase();

    return posts.length
      ? posts.filter((post) => {
          const str = `${post.title} ${post.categories}`.toLowerCase();
          return str.indexOf(searchValue) >= 0;
        })
      : null;
  }

  renderList() {
    const { postsObj, removePostAsk, modalOpen } = this.props;
    const posts = this.filterList(postsObj.list);

    return posts ? (
      posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onRemoveClick={() => {
            removePostAsk(post.id, post.title);
            modalOpen();
          }}
        />
      ))
    ) : (
      <p>No posts found</p>
    );
  }

  renderContent() {
    return <div className='pst-list'>{this.renderList()}</div>;
  }

  render() {
    switch (this.props.postsObj.mode) {
      case 'loading':
        return this.renderLoadingSpinner();

      case 'auth':
        return this.renderAuthSpinner();

      case 'failure':
        return this.renderLoadingError();

      case 'deny':
        return this.renderAuthError();

      case 'allow':
        return this.authSuccess();

      case 'success':
      case 'default':
      default:
        return this.renderContent();
    }
  }
}

const mapStateToProps = (state) => ({
  postsObj: state.postsList,
  searchQuery: state.postsSearch,
  auth: state.postsAuth,
});

export default connect(mapStateToProps, {
  fetchPosts,
  removePostAsk,
  modalOpen,
  initAuth,
})(PostList);
