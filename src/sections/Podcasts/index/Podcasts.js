import React from 'react';
import Header from '../../../main/Header';
import PodcastDetails from './PodcastDetails';
import PodcastList from './PodcastList';

const Podcasts = () => (
  <div className='app-main'>
    <Header />

    <main className='main'>
      <PodcastDetails />
      <PodcastList />
    </main>
  </div>
);

export default Podcasts;
