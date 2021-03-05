import React from 'react';
import TechBlock from '@sidebar/TechBlock';
import SortSwitch from '../subcomp/SortSwitch';

const PostsSidebar = () => (
  <div className='sidebar'>
    <SortSwitch />
    <TechBlock list='React, Redux, Axios, Redux Thunk, React Portals, Redux Blog Post API' />
  </div>
);

export default PostsSidebar;
