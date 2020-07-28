import React, { useState } from 'react';
import CommentList from './CommentList';
import TodoList from './TodoList';
import useResources from '../resources/useResources';
import { ErrorRemote, SpinnerBig } from '../../../util/UtilImg/UtilImg';

const BoardContent = () => {
  const [resource, setResource] = useState('comments');
  const state = useResources(resource);

  const showSpinner = state.spinner;
  const showError = state.error;
  const showComments = state.data.length > 0 && resource === 'comments';
  const showTodos = state.data.length > 0 && resource === 'todos';

  const buttonComments = (
    <button
      className={
        resource === 'comments' ? 'board__btn-tab--active' : 'board__btn-tab'
      }
      disabled={resource === 'comments'}
      onClick={() => setResource('comments')}
    >
      Comments
    </button>
  );

  const buttonTodos = (
    <button
      className={resource === 'todos' ? 'board__btn-tab--active' : 'board__btn-tab'}
      disabled={resource === 'todos'}
      onClick={() => setResource('todos')}
    >
      Todos
    </button>
  );

  const blockSpinner = (
    <div className='board-spinner-main'>
      <SpinnerBig />
      <div>
        <p>Request data from a remote server</p>
        <p>This may take some time</p>
        <p>Please wait</p>
      </div>
    </div>
  );

  const blockError = (
    <div className='board-error-main'>
      <ErrorRemote />
      <div>
        <p>The remote server is not responding</p>
        <p>Perhaps it is overloaded with requests</p>
        <p>Please come back later</p>
      </div>
    </div>
  );

  return (
    <div className='content'>
      <div className='content-wrap'>
        <h2>Board</h2>

        <div className='board__tabs'>
          {buttonComments}
          {buttonTodos}
        </div>

        {showSpinner && blockSpinner}
        {showError && blockError}
        {showComments && <CommentList list={state.data} />}
        {showTodos && <TodoList list={state.data} />}
      </div>
    </div>
  );
};

export default BoardContent;
