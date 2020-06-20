import React from 'react';
import ReadSidebar from './ReadSidebar';
import ReadContent from './ReadContent';

const Read = (props) => (
  <main className='main'>
    <ReadSidebar />
    <ReadContent id={props.match.params.id} />
  </main>
);

export default Read;
