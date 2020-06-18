import React from 'react';
import SidebarInfo from '../../../app/SidebarInfo/comp/SidebarInfo';
import Header from '../../../app/App/comp/Header';

const Posts = () => (
  <div className='app-main'>
    <Header path='/posts' />
    <main className='main'>
      <div className='sidebar'>
        <div className='sidebar-wrap'>
          <SidebarInfo list='React' />
        </div>
      </div>
      <div className='content'>
        <div className='content-wrap'>
          <h2>Post list</h2>
        </div>
      </div>
    </main>
  </div>
);

export default Posts;
