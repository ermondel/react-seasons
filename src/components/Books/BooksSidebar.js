import React from 'react';
import ViewMode from './ViewMode';
import BookDetails from './BookDetails';
import AppAboutTech from '../AppAboutTech';

const BooksSidebar = () => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
      <ViewMode />
      <BookDetails />
      <AppAboutTech list={['React', 'Redux']} />
    </div>
  </div>
);

export default BooksSidebar;
