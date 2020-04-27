import React from 'react';
import PodcastDetail from './PodcastDetail';
import PodcastList from './PodcastList';
import AppAboutTech from '../AppAboutTech';

const Podcasts = () => (
  <main className='main'>
    <div className='sidebar'>
      <div className='sidebar-wrap'>
        <PodcastDetail />
        <AppAboutTech list={['React', 'Redux']} />
      </div>
    </div>
    <div className='content'>
      <div className='content-wrap'>
        <h2>Podcasts</h2>
        <PodcastList />
      </div>
    </div>
  </main>
);

export default Podcasts;
