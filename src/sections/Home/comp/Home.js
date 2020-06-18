import React from 'react';
import Header from '../../../app/App/comp/Header';
import HomeSidebar from './HomeSidebar';
import HomeContent from './HomeContent';

const Home = (props) => (
  <div className='app-main'>
    <Header path={props.location.pathname} />

    <main className='main'>
      <HomeSidebar />
      <HomeContent />
    </main>
  </div>
);

export default Home;
