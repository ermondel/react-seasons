import React from 'react';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import HomeSidebar from './HomeSidebar';
import HomeContent from './HomeContent';

const Home = () => (
  <React.Fragment>
    <div className='side-container'>
      <MainNavigation />
      <HomeSidebar />
    </div>

    <div className='content-container'>
      <HomeContent />
      <Footer />
    </div>
  </React.Fragment>
);

export default Home;
