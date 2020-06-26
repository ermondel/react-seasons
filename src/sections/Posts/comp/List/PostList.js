import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, removePostAsk } from '../../actions/posts';
import SpinnerBig from '../../../../app/SpinnerImg/comp/SpinnerBig';
import ErrorRemoteImg from '../../../../app/ErrorImg/comp/ErrorRemoteImg';
import { modalOpen } from '../../../../app/ModalWindow/actions/ModalWindow';
import PostItem from './PostItem';

class PostList extends Component {
  componentDidMount() {
    if (!this.props.posts.list.length) {
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

  renderList() {
    const { posts, removePostAsk, modalOpen } = this.props;

    return posts.list.length ? (
      posts.list.map((post) => (
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

  render() {
    switch (this.props.posts.mode) {
      case 'loading':
        return this.renderSpinner();

      case 'failure':
        return this.renderError();

      case 'success':
      case 'default':
      default:
        return this.renderList();
    }
  }
}

const mapStateToProps = (state) => ({
  posts: state.postsList,
});

export default connect(mapStateToProps, {
  fetchPosts,
  removePostAsk,
  modalOpen,
})(PostList);
