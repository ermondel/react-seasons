import React from 'react';
import Fragment from '@subcomponents/Fragment';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import BooksSidebar from './BooksSidebar';
import BooksContent from './BooksContent';

const Books = () => (
  <Fragment documentTitle='Books'>
    <div className='side-container'>
      <MainNavigation />
      <BooksSidebar />
    </div>

    <div className='content-container'>
      <BooksContent />
      <Footer />
    </div>
  </Fragment>
);

export default Books;
