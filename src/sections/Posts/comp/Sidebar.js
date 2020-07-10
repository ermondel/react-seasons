import React from 'react';
import SidebarInfo from '../../../util/SidebarInfo/comp/SidebarInfo';
import SortSwitch from './SortSwitch';

const Sidebar = () => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
      <SortSwitch />
      <SidebarInfo list='React, Redux, Redux Blog Post API' />
    </div>
  </div>
);

export default Sidebar;
