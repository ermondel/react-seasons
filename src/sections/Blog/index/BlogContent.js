import React from 'react';
import BlogSpinner from './BlogSpinner';
import BlogError from './BlogError';
import PostList from './PostList';

const BlogContent = () => (
  <main className='main'>
    <h2 className='main__title'>Blog posts</h2>

    <BlogSpinner />
    <BlogError />
    <PostList />
  </main>
);

export default BlogContent;
