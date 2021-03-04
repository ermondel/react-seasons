import React from 'react';
import ViewMode from './ViewMode';
import BookDetails from './BookDetails';
import TechBlock from '@sidebar/TechBlock';

const BooksSidebar = () => (
  <div className='sidebar'>
    <ViewMode />
    <BookDetails />
    <TechBlock list='React, Redux' />
  </div>
);

export default BooksSidebar;
