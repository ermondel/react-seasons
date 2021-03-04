import React from 'react';
import BoardUsers from './BoardUsers';
import TechBlock from '@sidebar/TechBlock';

const BoardSidebar = () => (
  <div className='sidebar'>
    <BoardUsers />
    <TechBlock list='React, React Hooks, Axios, JSONPlaceholder API' />
  </div>
);

export default BoardSidebar;
