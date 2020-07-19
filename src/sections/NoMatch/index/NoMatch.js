import React from 'react';
import Header from '../../../main/Header';

const NoMatch = () => (
  <div className='app-main'>
    <Header />

    <main className='main'>
      <div className='sidebar'>
        <div className='sidebar-wrap'>{null}</div>
      </div>
      <div className='content'>
        <div className='content-wrap'>
          <h2>Page not found</h2>
          <h3>404</h3>
        </div>
      </div>
    </main>
  </div>
);

export default NoMatch;
