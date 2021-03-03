import React from 'react';
import Header from '../../../main/Header';
import BlogSidebar from './BlogSidebar';
import BlogContent from './BlogContent';
import Footer from '../../../main/Footer';

const Blog = () => (
  <React.Fragment>
    <div className='side-container'>
      <Header />
      <BlogSidebar />
    </div>

    <div className='content-container'>
      <BlogContent />
      <Footer />
    </div>
  </React.Fragment>
);

export default Blog;
