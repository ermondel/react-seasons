import React from 'react';
import BoardUserList from './BoardUserList';
import AppAboutTech from '../AppAboutTech';

const BoardControl = ({ res, onButtonClick }) => (
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
        <BoardUserList />
      </div>
      <AppAboutTech list={['React', 'React Hooks', 'JSONPlaceholder']} />
    </div>
  </div>
);

export default BoardControl;
