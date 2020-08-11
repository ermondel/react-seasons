import React from 'react';
import SidebarInfo from '../../../special/SidebarInfo/SidebarInfo';
import SortSwitch from './SortSwitch';

const Sidebar = () => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
      <SortSwitch />
      <SidebarInfo list='React, Redux, Axios, Redux Thunk, React Portals, Redux Blog Post API' />
    </div>
  </div>
);

export default Sidebar;
