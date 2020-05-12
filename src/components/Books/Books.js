import React from 'react';
import BooksSidebar from './BooksSidebar';
import BooksList from './BooksList';

const Books = () => (
  <main className='main'>
    <BooksSidebar />
    <BooksList />
  </main>
);

export default Books;
