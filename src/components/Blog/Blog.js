import React from 'react';
import UserDetails from './UserDetails';
import PostList from './PostList';
import AppAboutTech from '../AppAboutTech';

const Blog = () => (
  <main className='main'>
    <div className='sidebar'>
      <div className='sidebar-wrap'>
        <UserDetails />
        <AppAboutTech
          list={['React', 'Redux', 'Redux Thunk', 'JSONPlaceholder API']}
        />
      </div>
    </div>
    <div className='content'>
      <div className='content-wrap'>
        <h2>Blog posts</h2>
        <PostList />
      </div>
    </div>
  </main>
);

export default Blog;
