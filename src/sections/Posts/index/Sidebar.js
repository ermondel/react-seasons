import React from 'react';
import TechBlock from '@sidebar/TechBlock';
import SortSwitch from './SortSwitch';

const Sidebar = () => (
  <div className='sidebar'>
    <SortSwitch />
    <TechBlock list='React, Redux, Axios, Redux Thunk, React Portals, Redux Blog Post API' />
  </div>
);

export default Sidebar;
