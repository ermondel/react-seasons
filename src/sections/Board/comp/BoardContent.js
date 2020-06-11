import React, { useState } from 'react';
import CommentList from './CommentList';
import TodoList from './TodoList';
import useResources from '../resources/useResources';
import LoadingBar from '../../../app/LoadingBar/comp/LoadingBar';
import ErrorMessage from '../../../app/ErrorMessage/comp/ErrorMessage';

const BoardContent = () => {
  const [resource, setResource] = useState('comments');
  const state = useResources(resource);

  const showSpinner = state.spinner;
  const showError = state.error;
  const showComments = state.data.length > 0 && resource === 'comments';
  const showTodos = state.data.length > 0 && resource === 'todos';

  const buttonComments = (
    <button
      className={resource === 'comments' ? 'resources-btn_active' : 'resources-btn'}
      disabled={resource === 'comments'}
      onClick={() => setResource('comments')}
    >
      Comments
    </button>
  );

  const buttonTodos = (
    <button
      className={resource === 'todos' ? 'resources-btn_active' : 'resources-btn'}
      disabled={resource === 'todos'}
      onClick={() => setResource('todos')}
    >
      Todos
    </button>
  );

  return (
    <div className='content'>
      <div className='content-wrap'>
        <h2>Board</h2>

        <div className='resources-btns'>
          {buttonComments}
          {buttonTodos}
        </div>

        {showSpinner && <LoadingBar type='main' />}
        {showError && <ErrorMessage type='remote' tip={true} />}
        {showComments && <CommentList list={state.data} />}
        {showTodos && <TodoList list={state.data} />}
      </div>
    </div>
  );
};

export default BoardContent;
