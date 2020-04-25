import React from 'react';
import InfoTech from '../InfoTech';

const Board = () => (
  <main className="main">
    <div className="sidebar">
      <div className="sidebar-wrap">
        Sidebar
        <InfoTech list={['React', 'React Hooks', 'JSONPlaceholder']} />
      </div>
    </div>
    <div className="content">
      <div className="content-wrap">
        <h2>Board</h2>
      </div>
    </div>
  </main>
);

export default Board;
