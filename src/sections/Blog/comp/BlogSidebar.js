import React from 'react';
import UserDetails from '../subcomp/UserDetails';
import TechBlock from '@sidebar/TechBlock';

const BlogSidebar = () => (
  <div className='sidebar'>
    <UserDetails />
    <TechBlock list='React, Redux, Redux Thunk, Axios, JSONPlaceholder API' />
  </div>
);

export default BlogSidebar;
