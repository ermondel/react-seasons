import React from 'react';
import Header from '../../../app/App/comp/Header';
import BooksSidebar from './BooksSidebar';
import BookList from './BookList';

const Books = (props) => (
  <div className='app-main'>
    <Header path={props.location.pathname} />

    <main className='main'>
      <BooksSidebar />
      <BookList />
    </main>
  </div>
);

export default Books;
