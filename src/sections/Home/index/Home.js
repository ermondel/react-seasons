import React from 'react';
import Header from '../../../main/Header';
import HomeSidebar from './HomeSidebar';
import HomeContent from './HomeContent';

const Home = () => (
  <div className='app-main'>
    <Header />

    <main className='main'>
      <HomeSidebar />
      <HomeContent />
    </main>
  </div>
);

export default Home;
