import React from 'react';
import useResources from './useResources';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

const UserList = () => {
  const users = useResources('users');

  if (users.status === '1xx') {
    return <Loading type='sidebar' />;
  }

  if (users.status === '5xx') {
    return <ErrorMessage type='remote' />;
  }

  if (users.status === '2xx') {
    return (
      <ul className='user-list'>
        {users.data.map((user) => (
          <li className='user-list__item' key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    );
  }

  return null;
};

export default UserList;
