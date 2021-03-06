import React from 'react';
import TechBlock from '@sidebar/TechBlock';
import PodcastDetails from '../subcomp/PodcastDetails';

const PodcastsSidebar = ({ podcast }) => (
  <div className='sidebar'>
    <PodcastDetails />
    <TechBlock list='React, Redux' />
  </div>
);

export default PodcastsSidebar;
