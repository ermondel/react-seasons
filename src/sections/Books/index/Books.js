import React from 'react';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import BooksSidebar from './BooksSidebar';
import BookList from './BookList';

const Books = () => (
  <React.Fragment>
    <div className='side-container'>
      <MainNavigation />
      <BooksSidebar />
    </div>

    <div className='content-container'>
      <BookList />
      <Footer />
    </div>
  </React.Fragment>
);

export default Books;
