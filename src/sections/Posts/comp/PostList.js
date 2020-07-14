import React from 'react';
import { connect } from 'react-redux';
import { removePostAsk as removePost } from '../actions/posts';
import { modalOpen } from '../../../util/ModalWindow/comp/ModalWindow';
import ListItem from './ListItem';

const filterList = (posts, searchQuery) => {
  searchQuery = searchQuery.toLowerCase();
  return posts.filter((post) => {
    const str = `${post.title} ${post.categories}`.toLowerCase();
    return str.indexOf(searchQuery) >= 0;
  });
};

const PostList = ({ postsList, searchQuery, sortType, removePost, modalOpen }) => {
  let posts = searchQuery ? filterList(postsList, searchQuery) : postsList;

  if (sortType === 'old') {
    posts = posts.map((val, i, arr) => arr[arr.length - i - 1]);
  }

  if (!posts.length) return <p>No posts found</p>;

  return (
    <div className='pst-list'>
      {posts.map((post) => (
        <ListItem
          key={post.id}
          post={post}
          onRemoveClick={() => {
            removePost(post.id, post.title);
            modalOpen();
          }}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  postsList: state.postsList,
  searchQuery: state.postsSearch,
  sortType: state.postsSort,
});

export default connect(mapStateToProps, { removePost, modalOpen })(PostList);
