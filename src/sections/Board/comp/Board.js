import React from 'react';
import BoardSidebar from './BoardSidebar';
import BoardContent from './BoardContent';

const Board = () => (
  <main className='main'>
    <BoardSidebar />
    <BoardContent />
  </main>
);

export default Board;
