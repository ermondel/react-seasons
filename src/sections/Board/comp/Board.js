import React from 'react';
import Header from '../../../app/App/comp/Header';
import BoardSidebar from './BoardSidebar';
import BoardContent from './BoardContent';

const Board = () => (
  <div className='app-main'>
    <Header path='/board' />
    <main className='main'>
      <BoardSidebar />
      <BoardContent />
    </main>
  </div>
);

export default Board;
