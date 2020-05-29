import React from 'react';
import UserDetails from './UserDetails';
import SidebarInfo from '../../system/SidebarInfo/SidebarInfo';

const BlogSidebar = () => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
      <UserDetails />
      <SidebarInfo list='React, Redux, Redux Thunk, Axios, JSONPlaceholder API' />
    </div>
  </div>
);

export default BlogSidebar;