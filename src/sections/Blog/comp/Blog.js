import React from 'react';
import Header from '../../../app/App/comp/Header';
import BlogSidebar from './BlogSidebar';
import BlogContent from './BlogContent';

const Blog = () => (
  <div className='app-main'>
    <Header path='/blog' />
    <main className='main'>
      <BlogSidebar />
      <BlogContent />
    </main>
  </div>
);

export default Blog;
