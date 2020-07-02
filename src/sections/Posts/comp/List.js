import React from 'react';
import PostList from './PostList';
import ListControl from './ListControl';

const List = () => (
  <div className='content-wrap'>
    <h2>Post list</h2>

    <ListControl />
    <PostList />
  </div>
);

export default List;
