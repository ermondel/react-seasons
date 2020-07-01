import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, removePostAsk } from '../actions/posts';
import SpinnerBig from '../../../app/SpinnerImg/comp/SpinnerBig';
import ErrorRemoteImg from '../../../app/ErrorImg/comp/ErrorRemoteImg';
import { modalOpen } from '../../../app/ModalWindow/actions/ModalWindow';
import PostItem from './PostItem';

class PostList extends Component {
  componentDidMount() {
    if (!this.props.postsObj.list.length) {
      this.props.fetchPosts();
    }
  }

  renderSpinner() {
    return (
      <div className='posts-spinner'>
        <SpinnerBig />
        <div>
          <p>Request data from a remote server</p>
          <p>This may take some time</p>
          <p>Please wait</p>
        </div>
      </div>
    );
  }

  renderError() {
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
    return (
      <div>
        <div>
          <Link to='/posts/add'>Add new</Link>
        </div>
        {this.renderList()}
      </div>
    );
  }

  render() {
    switch (this.props.postsObj.mode) {
      case 'loading':
        return this.renderSpinner();

      case 'failure':
        return this.renderError();

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
});

export default connect(mapStateToProps, {
  fetchPosts,
  removePostAsk,
  modalOpen,
})(PostList);
