import React from 'react';
import useResources from '../resources/useResources';
import UserList from './UserList';
import { ErrorRemote, SpinnerSmall } from '@subcomponents/UtilImages';

const BoardUsers = () => {
  const state = useResources('users');

  const blockSpinner = (
    <div className='board-spinner-sidebar'>
      <SpinnerSmall />
    </div>
  );

  const blockError = (
    <div className='board-error-sidebar'>
      <ErrorRemote />
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
