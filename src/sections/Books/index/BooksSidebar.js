import React from 'react';
import ViewMode from './ViewMode';
import BookDetails from './BookDetails';
import SidebarInfo from '../../../special/SidebarInfo/SidebarInfo';

const BooksSidebar = () => (
  <div className='sidebar'>
    <ViewMode />
    <BookDetails />
    <SidebarInfo list='React, Redux' />
  </div>
);

export default BooksSidebar;
