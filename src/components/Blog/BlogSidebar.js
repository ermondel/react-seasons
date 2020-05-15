import React from 'react';
import UserDetails from './UserDetails';
import SidebarInfo from '../SidebarInfo/SidebarInfo';

const BlogSidebar = () => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
      <UserDetails />
      <SidebarInfo list='React, Redux, Redux Thunk, JSONPlaceholder API' />
    </div>
  </div>
);

export default BlogSidebar;
