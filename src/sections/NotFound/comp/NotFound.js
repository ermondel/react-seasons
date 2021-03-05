import React from 'react';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import NotFoundSidebar from './NotFoundSidebar';
import NotFoundContent from './NotFoundContent';

const NotFound = () => (
  <React.Fragment>
    <div className='side-container'>
      <MainNavigation />
      <NotFoundSidebar />
    </div>

    <div className='content-container'>
      <NotFoundContent />
      <Footer />
    </div>
  </React.Fragment>
);

export default NotFound;
