import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { removePostConfirm, resetViewStatus } from '../actions/posts';
import PostItem from './PostItem';

class View extends Component {
  componentWillUnmount() {
    if (this.props.status !== 'default') this.props.resetViewStatus();
  }

  searchPost() {
    const { match, postsList } = this.props;

    if (postsList.length) {
      return postsList.find((el) => String(el.id) === match.params.id);
    }
  }

  render() {
    if (this.props.status === 'deleted') return <Redirect to='/posts' />;

    const post = this.searchPost();

    return post ? (
      <PostItem
        post={post}
        onRemoveClick={() => this.props.removePostConfirm(post)}
      />
    ) : (
      <h2>Post not found</h2>
    );
  }
}

const mapStateToProps = (state) => ({
  status: state.postsView,
  postsList: state.postsList,
});

export default connect(mapStateToProps, {
  removePostConfirm,
  resetViewStatus,
})(View);
