import React from 'react';
import UserList from './UserList';
import AppAboutTech from '../AppAboutTech';

const BoardSidebar = ({ res, onButtonClick }) => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
      <div className='control'>
        <div className='control_btns'>
          <button
            className={res === 'comments' ? 'btn-common_active' : 'btn-common'}
            disabled={res === 'comments'}
            onClick={() => onButtonClick('comments')}
          >
            comments
          </button>

          <button
            className={res === 'todos' ? 'btn-common_active' : 'btn-common'}
            disabled={res === 'todos'}
            onClick={() => onButtonClick('todos')}
          >
            todos
          </button>
        </div>
        <UserList />
      </div>
      <AppAboutTech list={['React', 'React Hooks', 'JSONPlaceholder API']} />
    </div>
  </div>
);

export default BoardSidebar;
