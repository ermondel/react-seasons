import React from 'react';
import Header from '../../../app/App/comp/Header';
import Sidebar from './Sidebar';
import Content from './Content';

const Posts = (props) => (
  <div className='app-main'>
    <Header path={props.location.pathname} />

    <main className='main'>
      <Sidebar />
      <Content />
    </main>
  </div>
);

export default Posts;
