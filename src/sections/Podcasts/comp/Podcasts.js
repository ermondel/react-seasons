import React from 'react';
import Fragment from '@subcomponents/Fragment';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import PodcastsSidebar from './PodcastsSidebar';
import PodcastsContent from './PodcastsContent';

const Podcasts = () => (
  <Fragment documentTitle='Podcasts'>
    <div className='side-container'>
      <MainNavigation />
      <PodcastsSidebar />
    </div>

    <div className='content-container'>
      <PodcastsContent />
      <Footer />
    </div>
  </Fragment>
);

export default Podcasts;
