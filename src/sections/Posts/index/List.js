import React from 'react';
import PostList from './PostList';
import ListControl from './ListControl';

const List = () => (
  <div>
    <h2 className='section-title'>Post list</h2>

    <ListControl />
    <PostList />
  </div>
);

export default List;
