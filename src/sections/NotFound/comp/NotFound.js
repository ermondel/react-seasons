import React from 'react';
import Fragment from '@subcomponents/Fragment';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import NotFoundSidebar from './NotFoundSidebar';
import NotFoundContent from './NotFoundContent';

const NotFound = () => (
  <Fragment documentTitle='404'>
    <div className='side-container'>
      <MainNavigation />
      <NotFoundSidebar />
    </div>

    <div className='content-container'>
      <NotFoundContent />
      <Footer />
    </div>
  </Fragment>
);

export default NotFound;
