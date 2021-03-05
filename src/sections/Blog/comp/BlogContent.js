import React from 'react';
import BlogSpinner from '../subcomp/BlogSpinner';
import BlogError from '../subcomp/BlogError';
import PostList from '../subcomp/PostList';

const BlogContent = () => (
  <main className='main'>
    <h2 className='main__title'>Blog posts</h2>

    <BlogSpinner />
    <BlogError />
    <PostList />
  </main>
);

export default BlogContent;
