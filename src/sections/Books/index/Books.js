import React from 'react';
import Header from '../../../main/Header';
import BooksSidebar from './BooksSidebar';
import BookList from './BookList';

const Books = () => (
  <div className='app-main'>
    <Header />

    <main className='main'>
      <BooksSidebar />
      <BookList />
    </main>
  </div>
);

export default Books;
