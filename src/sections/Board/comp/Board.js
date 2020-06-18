import React from 'react';
import Header from '../../../app/App/comp/Header';
import BoardSidebar from './BoardSidebar';
import BoardContent from './BoardContent';

const Board = (props) => (
  <div className='app-main'>
    <Header path={props.location.pathname} />

    <main className='main'>
      <BoardSidebar />
      <BoardContent />
    </main>
  </div>
);

export default Board;
