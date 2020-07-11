import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchPostsNew,
  authAndFetchPostsNew,
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
    const { postList, authData, fetchPostsNew, authAndFetchPostsNew } = this.props;

    if (!postList.length) {
      if (authData.publicKey) {
        fetchPostsNew(authData.publicKey, 'LIST');
      } else {
        authAndFetchPostsNew('LIST');
      }
    }
  }

  filterList(posts, searchQuery) {
    searchQuery = searchQuery.toLowerCase();
    return posts.filter((post) => {
      const str = `${post.title} ${post.categories}`.toLowerCase();
      return str.indexOf(searchQuery) >= 0;
    });
  }

  renderList() {
    const { removePostAsk, modalOpen } = this.props;
    const { postList, authData, searchQuery, sortType } = this.props;

    let posts = searchQuery ? this.filterList(postList, searchQuery) : postList;

    if (sortType === 'old') {
      posts = posts.map((val, i, arr) => arr[arr.length - i - 1]);
    }

    return posts.length ? (
      <div className='pst-list'>
        {posts.map((post) => (
          <ListItem
            key={post.id}
            post={post}
            showRemoveBtn={authData.publicKey ? true : false}
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
    switch (this.props.listState) {
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
      case 'default':
      default:
        return this.renderList();
    }
  }
}

const mapStateToProps = (state) => ({
  postList: state.postsListNew,
  listState: state.postsListStateNew,
  searchQuery: state.postsSearch,
  authData: state.postsAuthNew,
  sortType: state.postsSort,
});

export default connect(mapStateToProps, {
  fetchPostsNew,
  authAndFetchPostsNew,
  removePostAsk,
  modalOpen,
  initAuth,
})(PostList);
