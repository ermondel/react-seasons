import React from 'react';
import Fragment from '@subcomponents/Fragment';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import PostsSidebar from './PostsSidebar';
import PostsContent from './PostsContent';

const Posts = () => (
  <Fragment documentTitle='Posts'>
    <div className='side-container'>
      <MainNavigation />
      <PostsSidebar />
    </div>

    <div className='content-container'>
      <PostsContent />
      <Footer />
    </div>
  </Fragment>
);

export default Posts;
