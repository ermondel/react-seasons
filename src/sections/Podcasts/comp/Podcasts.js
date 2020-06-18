import React from 'react';
import Header from '../../../app/App/comp/Header';
import PodcastDetails from './PodcastDetails';
import PodcastList from './PodcastList';

const Podcasts = () => (
  <div className='app-main'>
    <Header path='/podcasts' />
    <main className='main'>
      <PodcastDetails />
      <PodcastList />
    </main>
  </div>
);

export default Podcasts;
