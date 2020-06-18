import React from 'react';
import Header from '../../../app/App/comp/Header';
import PodcastDetails from './PodcastDetails';
import PodcastList from './PodcastList';

const Podcasts = (props) => (
  <div className='app-main'>
    <Header path={props.location.pathname} />

    <main className='main'>
      <PodcastDetails />
      <PodcastList />
    </main>
  </div>
);

export default Podcasts;
