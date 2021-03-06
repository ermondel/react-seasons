import React from 'react';
import TechBlock from '@sidebar/TechBlock';
import UserDetails from '../subcomp/UserDetails';

const BlogSidebar = () => (
  <div className='sidebar'>
    <UserDetails />
    <TechBlock list='React, Redux, Redux Thunk, Axios, JSONPlaceholder API' />
  </div>
);

export default BlogSidebar;
