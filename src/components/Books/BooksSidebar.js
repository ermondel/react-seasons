import React from 'react';
import BooksControl from './BooksControl';
import BooksDetails from './BooksDetails';
import AppAboutTech from '../AppAboutTech';

const BooksSidebar = () => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
      <BooksControl />
      <BooksDetails />
      <AppAboutTech list={['React', 'Redux']} />
    </div>
  </div>
);

export default BooksSidebar;
