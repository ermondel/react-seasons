import React from 'react';
import useResources from '../resources/useResources';
import UserList from './UserList';
import SpinnerSmall from '../../../app/SpinnerImg/comp/SpinnerSmall';
import ErrorRemoteImg from '../../../app/ErrorImg/comp/ErrorRemoteImg';

const BoardUsers = () => {
  const state = useResources('users');

  const blockSpinner = (
    <div className='board-spinner-sidebar'>
      <SpinnerSmall />
    </div>
  );

  const blockError = (
    <div className='board-error-sidebar'>
      <ErrorRemoteImg />
    </div>
  );

  return (
    <div className='board-users'>
      <h3 className='user-list__title'>Users</h3>

      {state.spinner && blockSpinner}
      {state.error && blockError}
      {state.data.length > 0 && <UserList list={state.data} />}
    </div>
  );
};

export default BoardUsers;
