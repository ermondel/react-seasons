import React from 'react';
import Header from '../../../main/Header';
import BoardSidebar from './BoardSidebar';
import BoardContent from './BoardContent';
import Footer from '../../../main/Footer';

const Board = () => (
  <React.Fragment>
    <div className='side-container'>
      <Header />
      <BoardSidebar />
    </div>

    <div className='content-container'>
      <BoardContent />
      <Footer />
    </div>
  </React.Fragment>
);

export default Board;
