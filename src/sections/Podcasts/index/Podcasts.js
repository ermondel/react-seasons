import React from 'react';
import Header from '../../../main/Header';
import PodcastDetails from './PodcastDetails';
import PodcastList from './PodcastList';
import Footer from '../../../main/Footer';

const Podcasts = () => (
  <React.Fragment>
    <div className='side-container'>
      <Header />
      <PodcastDetails />
    </div>

    <div className='content-container'>
      <PodcastList />
      <Footer />
    </div>
  </React.Fragment>
);

export default Podcasts;
