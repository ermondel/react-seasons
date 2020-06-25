import React from 'react';
import ListSidebar from './ListSidebar';
import ListContent from './ListContent';
import RemovePostWindow from '../Remove/RemovePostWindow';

const List = () => (
  <main className='main'>
    <ListSidebar />
    <ListContent />
    <RemovePostWindow />
  </main>
);

export default List;
