import React from 'react';
import useResources from '../resources/useResources';
import UserList from './UserList';
import LoadingBar from '../../../app/LoadingBar/comp/LoadingBar';
import ErrorMessage from '../../../app/ErrorMessage/comp/ErrorMessage';

const BoardUsers = () => {
  const state = useResources('users');

  return (
    <div className='board-users'>
      <h3 className='user-list__title'>Users</h3>
      {state.spinner && <LoadingBar type='sidebar' />}
      {state.error && <ErrorMessage type='remote' />}
      {state.data.length > 0 && <UserList list={state.data} />}
    </div>
  );
};

export default BoardUsers;
