import React from 'react';
import Fragment from '@subcomponents/Fragment';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import BoardSidebar from './BoardSidebar';
import BoardContent from './BoardContent';

const Board = () => (
  <Fragment documentTitle='Board'>
    <div className='side-container'>
      <MainNavigation />
      <BoardSidebar />
    </div>

    <div className='content-container'>
      <BoardContent />
      <Footer />
    </div>
  </Fragment>
);

export default Board;
