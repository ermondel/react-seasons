import React from 'react';
import useResources from './useResources';
import LoadingBarSidebar from '../LoadingBarSidebar';

const UserList = () => {
  const users = useResources('users');

  if (!users) {
    return <LoadingBarSidebar />;
  }

  return (
    <ul className='user-list'>
      {users.map((user) => (
        <li className='user-list__item' key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
