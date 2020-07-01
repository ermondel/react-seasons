import React from 'react';
import Message from './Message';
import SearchForm from './SearchForm';
import PostList from './PostList';

const List = () => (
  <div className='content-wrap'>
    <h2>Post List</h2>

    <SearchForm />
    <Message />
    <PostList />
  </div>
);

export default List;
