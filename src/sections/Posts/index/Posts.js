import React from 'react';
import Header from '../../../main/Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from '../../../main/Footer';

const Posts = () => (
  <React.Fragment>
    <div className='side-container'>
      <Header />
      <Sidebar />
    </div>

    <div className='content-container'>
      <Content />
      <Footer />
    </div>
  </React.Fragment>
);

export default Posts;
