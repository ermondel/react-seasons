import React from 'react';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import PodcastsSidebar from './PodcastsSidebar';
import PodcastsContent from './PodcastsContent';

const Podcasts = () => (
  <React.Fragment>
    <div className='side-container'>
      <MainNavigation />
      <PodcastsSidebar />
    </div>

    <div className='content-container'>
      <PodcastsContent />
      <Footer />
    </div>
  </React.Fragment>
);

export default Podcasts;
