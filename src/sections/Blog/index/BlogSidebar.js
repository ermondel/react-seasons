import React from 'react';
import UserDetails from './UserDetails';
import SidebarInfo from '../../../special/SidebarInfo/SidebarInfo';

const BlogSidebar = () => (
  <div className='sidebar'>
    <UserDetails />
    <SidebarInfo list='React, Redux, Redux Thunk, Axios, JSONPlaceholder API' />
  </div>
);

export default BlogSidebar;
