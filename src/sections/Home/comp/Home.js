import React from 'react';
import Fragment from '@subcomponents/Fragment';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import HomeSidebar from './HomeSidebar';
import HomeContent from './HomeContent';

const Home = () => (
  <Fragment>
    <div className='side-container'>
      <MainNavigation />
      <HomeSidebar />
    </div>

    <div className='content-container'>
      <HomeContent />
      <Footer />
    </div>
  </Fragment>
);

export default Home;
