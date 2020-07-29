import React from 'react';
import BlogSpinner from './BlogSpinner';
import BlogError from './BlogError';
import PostList from './PostList';

const BlogContent = () => (
  <div className='content'>
    <div className='content-wrap'>
      <h2 className='section-title'>Blog posts</h2>

      <BlogSpinner />
      <BlogError />
      <PostList />
    </div>
  </div>
);

export default BlogContent;
