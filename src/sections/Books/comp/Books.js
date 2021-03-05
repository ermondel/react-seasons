import React from 'react';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import BooksSidebar from './BooksSidebar';
import BooksContent from './BooksContent';

const Books = () => (
  <React.Fragment>
    <div className='side-container'>
      <MainNavigation />
      <BooksSidebar />
    </div>

    <div className='content-container'>
      <BooksContent />
      <Footer />
    </div>
  </React.Fragment>
);

export default Books;
