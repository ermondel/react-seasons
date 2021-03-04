import React from 'react';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import Sidebar from './Sidebar';
import Content from './Content';

const Posts = () => (
  <React.Fragment>
    <div className='side-container'>
      <MainNavigation />
      <Sidebar />
    </div>

    <div className='content-container'>
      <Content />
      <Footer />
    </div>
  </React.Fragment>
);

export default Posts;
