import React from 'react';
import UserDetails from './UserDetails';
import AppAboutTech from '../AppAboutTech';

const BlogSidebar = () => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
      <UserDetails />
      <AppAboutTech
        list={['React', 'Redux', 'Redux Thunk', 'JSONPlaceholder API']}
      />
    </div>
  </div>
);

export default BlogSidebar;
