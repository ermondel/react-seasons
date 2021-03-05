import React from 'react';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import PostsSidebar from './PostsSidebar';
import PostsContent from './PostsContent';

const Posts = () => (
  <React.Fragment>
    <div className='side-container'>
      <MainNavigation />
      <PostsSidebar />
    </div>

    <div className='content-container'>
      <PostsContent />
      <Footer />
    </div>
  </React.Fragment>
);

export default Posts;
