import React from 'react';
import MainNavigation from '@subcomponents/MainNavigation';

const NoMatch = () => (
  <div className='app-main'>
    <MainNavigation />

    <main className='main'>
      <div className='sidebar'>
        <div className='sidebar-wrap'>{null}</div>
      </div>
      <div className='content'>
        <div className='content-wrap'>
          <h2 className='section-title'>Page not found</h2>
          <h3>404</h3>
        </div>
      </div>
    </main>
  </div>
);

export default NoMatch;
