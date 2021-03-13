import React from 'react';
import Fragment from '@subcomponents/Fragment';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import BlogSidebar from './BlogSidebar';
import BlogContent from './BlogContent';

const Blog = () => (
  <Fragment documentTitle='Blog'>
    <div className='side-container'>
      <MainNavigation />
      <BlogSidebar />
    </div>

    <div className='content-container'>
      <BlogContent />
      <Footer />
    </div>
  </Fragment>
);

export default Blog;
