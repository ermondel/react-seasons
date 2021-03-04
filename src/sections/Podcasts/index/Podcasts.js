import React from 'react';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import PodcastDetails from './PodcastDetails';
import PodcastList from './PodcastList';

const Podcasts = () => (
  <React.Fragment>
    <div className='side-container'>
      <MainNavigation />
      <PodcastDetails />
    </div>

    <div className='content-container'>
      <PodcastList />
      <Footer />
    </div>
  </React.Fragment>
);

export default Podcasts;
