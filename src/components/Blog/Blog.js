import React from 'react';
import UserDetails from './UserDetails';
import PostList from './PostList';

const Blog = () => (
  <main className="main">
    <div className="sidebar">
      <div className="sidebar-wrap">
        <UserDetails />
      </div>
    </div>
    <div className="content">
      <div className="content-wrap">
        <PostList />
      </div>
    </div>
  </main>
);

export default Blog;
