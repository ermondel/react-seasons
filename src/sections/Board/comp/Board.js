import React from 'react';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import BoardSidebar from './BoardSidebar';
import BoardContent from './BoardContent';

const Board = () => (
  <React.Fragment>
    <div className='side-container'>
      <MainNavigation />
      <BoardSidebar />
    </div>

    <div className='content-container'>
      <BoardContent />
      <Footer />
    </div>
  </React.Fragment>
);

export default Board;
