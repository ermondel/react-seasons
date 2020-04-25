import React, { useState } from 'react';
import UserList from './UserList';
import InfoTech from '../InfoTech';
import ResourceList from './ResourceList';

const renderBtn = (resource, resourceActive, onClick) => {
  const active = resource === resourceActive ? ' control__btn_ative' : '';
  const className = 'control__btn' + active;

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={active ? true : false}
    >
      {resource}
    </button>
  );
};

const Board = () => {
  const [resource, setResource] = useState('comments');

  return (
    <main className="main">
      <div className="sidebar">
        <div className="sidebar-wrap">
          <div className="control">
            <div className="control_btns">
              {renderBtn('comments', resource, () => setResource('comments'))}
              {renderBtn('todos', resource, () => setResource('todos'))}
            </div>
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
