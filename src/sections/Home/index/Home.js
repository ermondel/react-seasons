import React from 'react';
import Header from '../../../main/Header';
import HomeSidebar from './HomeSidebar';
import HomeContent from './HomeContent';
import Footer from '../../../main/Footer';

const Home = () => (
  <React.Fragment>
    <div className='side-container'>
      <Header />
      <HomeSidebar />
    </div>

    <div className='content-container'>
      <HomeContent />
      <Footer />
    </div>
  </React.Fragment>
);

export default Home;
