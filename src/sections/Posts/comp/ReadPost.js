import React from 'react';
import SidebarInfo from '../../../app/SidebarInfo/comp/SidebarInfo';

const ReadPost = () => (
  <main className='main'>
    <div className='sidebar'>
      <div className='sidebar-wrap'>
        <SidebarInfo list='React' />
      </div>
    </div>
    <div className='content'>
      <div className='content-wrap'>
        <h2>Read post</h2>
      </div>
    </div>
  </main>
);

export default ReadPost;
