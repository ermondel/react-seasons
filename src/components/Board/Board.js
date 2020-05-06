import React, { useState } from 'react';
import BoardControl from './BoardControl';
import BoardResourceList from './BoardResourceList';

const Board = () => {
  const [resource, setResource] = useState('comments');

  return (
    <main className='main'>
      <BoardControl res={resource} onButtonClick={setResource} />
      <BoardResourceList resource={resource} />
    </main>
  );
};

export default Board;
