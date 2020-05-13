import React from 'react';
import Control from './Control';
import Details from './Details';
import AppAboutTech from '../AppAboutTech';

const Sidebar = () => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
      <Control />
      <Details />
      <AppAboutTech list={['React', 'Redux']} />
    </div>
  </div>
);

export default Sidebar;
