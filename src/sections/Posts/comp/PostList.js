import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchPosts,
  authAndFetchPosts,
  removePostAsk,
  initAuth,
} from '../actions/posts';
import { modalOpen } from '../../../util/ModalWindow/comp/ModalWindow';
import ListItem from './ListItem';
import LoadingSpinner from './LoadingSpinner';
import AuthSpinner from './AuthSpinner';
import LoadingError from './LoadingError';
import AuthError from './AuthError';
import AuthSuccess from './AuthSuccess';

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

  filterList(posts, search) {
    search = search.toLowerCase();
    return posts.filter((post) => {
      const str = `${post.title} ${post.categories}`.toLowerCase();
      return str.indexOf(search) >= 0;
    });
  }

  renderList() {
    const { posts, removePostAsk, modalOpen, auth, search, sortType } = this.props;
    let postList = search ? this.filterList(posts.list, search) : posts.list;

    if (sortType === 'old') {
      postList = postList.map((val, i, arr) => arr[arr.length - i - 1]);
    }

    return postList.length ? (
      <div className='pst-list'>
        {postList.map((post) => (
          <ListItem
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
        return <LoadingSpinner />;

      case 'failure':
        return <LoadingError />;

      case 'auth':
        return <AuthSpinner />;

      case 'deny':
        return <AuthError />;

      case 'allow':
        return <AuthSuccess />;

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
  sortType: state.postsSort,
});

export default connect(mapStateToProps, {
  fetchPosts,
  authAndFetchPosts,
  removePostAsk,
  modalOpen,
  initAuth,
})(PostList);
