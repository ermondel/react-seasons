import React from 'react';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import BlogSidebar from './BlogSidebar';
import BlogContent from './BlogContent';

const Blog = () => (
  <React.Fragment>
    <div className='side-container'>
      <MainNavigation />
      <BlogSidebar />
    </div>

    <div className='content-container'>
      <BlogContent />
      <Footer />
    </div>
  </React.Fragment>
);

export default Blog;
