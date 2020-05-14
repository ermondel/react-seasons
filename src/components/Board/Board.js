import React, { useState } from 'react';
import BoardSidebar from './BoardSidebar';
import ResourceList from './ResourceList';

const Board = () => {
  const [resource, setResource] = useState('comments');

  return (
    <main className='main'>
      <BoardSidebar res={resource} onButtonClick={setResource} />
      <ResourceList resource={resource} />
    </main>
  );
};

export default Board;
