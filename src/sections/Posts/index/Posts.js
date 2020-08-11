import React from 'react';
import Header from '../../../main/Header';
import Sidebar from './Sidebar';
import Content from './Content';

const Posts = () => (
  <div className='app-main'>
    <Header />

    <main className='main'>
      <Sidebar />
      <Content />
    </main>
  </div>
);

export default Posts;
