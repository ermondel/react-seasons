import React from 'react';
import Header from '../../../main/Header';
import BooksSidebar from './BooksSidebar';
import BookList from './BookList';
import Footer from '../../../main/Footer';

const Books = () => (
  <React.Fragment>
    <div className='side-container'>
      <Header />
      <BooksSidebar />
    </div>

    <div className='content-container'>
      <BookList />
      <Footer />
    </div>
  </React.Fragment>
);

export default Books;
