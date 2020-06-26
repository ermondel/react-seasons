import React from 'react';
import PostsMessage from './PostsMessage';
import PostList from './PostList';

const ListContent = () => (
  <div className='content'>
    <div className='content-wrap'>
      <h2>Post list</h2>

      <PostsMessage />
      <PostList />
    </div>
  </div>
);

export default ListContent;
