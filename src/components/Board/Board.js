import React, { useState } from 'react';
import UserList from './UserList';
import InfoTech from '../InfoTech';
import ResourceList from './ResourceList';

const Board = () => {
  const [resource, setResource] = useState('comments');

  return (
    <main className="main">
      <div className="sidebar">
        <div className="sidebar-wrap">
          <div>
            <button onClick={() => setResource('comments')}>Comments</button>
            <button onClick={() => setResource('todos')}>Todos</button>
            <UserList />
          </div>
          <InfoTech list={['React', 'React Hooks', 'JSONPlaceholder']} />
        </div>
      </div>
      <div className="content">
        <div className="content-wrap">
          <h2>{resource}</h2>
          <ResourceList resource={resource} />
        </div>
      </div>
    </main>
  );
};

export default Board;
