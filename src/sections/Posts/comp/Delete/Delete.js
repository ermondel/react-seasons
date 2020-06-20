import React from 'react';
import DeleteSidebar from './DeleteSidebar';
import DeleteContent from './DeleteContent';

const Delete = (props) => (
  <main className='main'>
    <DeleteSidebar />
    <DeleteContent id={props.match.params.id} />
  </main>
);

export default Delete;
