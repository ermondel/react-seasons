import React from 'react';
import { connect } from 'react-redux';
import { removePostAsk } from '../actions/posts';
import { modalOpen } from '../../../util/ModalWindow/comp/ModalWindow';
import PostItem from './PostItem';

const View = ({ match, postsList, removePostAsk, modalOpen }) => {
  let post;

  if (postsList.length) {
    post = postsList.find((el) => String(el.id) === match.params.id);
  }

  if (!post) return <h2>Post not found</h2>;

  return (
    <PostItem
      post={post}
      onRemoveClick={() => {
        removePostAsk(post.id, post.title);
        modalOpen();
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  postsList: state.postsList,
});

export default connect(mapStateToProps, { removePostAsk, modalOpen })(View);
