import React from 'react';
import SidebarInfo from '../../../special/SidebarInfo/SidebarInfo';
import SortSwitch from './SortSwitch';

const Sidebar = () => (
  <div className='sidebar'>
    <SortSwitch />
    <SidebarInfo list='React, Redux, Axios, Redux Thunk, React Portals, Redux Blog Post API' />
  </div>
);

export default Sidebar;
