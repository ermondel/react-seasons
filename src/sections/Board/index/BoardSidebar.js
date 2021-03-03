import React from 'react';
import BoardUsers from './BoardUsers';
import SidebarInfo from '../../../special/SidebarInfo/SidebarInfo';

const BoardSidebar = () => (
  <div className='sidebar'>
    <BoardUsers />
    <SidebarInfo list='React, React Hooks, Axios, JSONPlaceholder API' />
  </div>
);

export default BoardSidebar;
