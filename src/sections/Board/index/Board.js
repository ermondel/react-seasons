import React from 'react';
import Header from '../../../main/Header';
import BoardSidebar from './BoardSidebar';
import BoardContent from './BoardContent';

const Board = () => (
  <div className='app-main'>
    <Header />

    <main className='main'>
      <BoardSidebar />
      <BoardContent />
    </main>
  </div>
);

export default Board;
