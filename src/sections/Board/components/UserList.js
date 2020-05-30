import React from 'react';
import useResources from '../resources/useResources';
import LoadingBar from '../../../app/LoadingBar/components/LoadingBar';
import ErrorMessage from '../../../app/ErrorMessage/components/ErrorMessage';

const UserList = () => {
  const users = useResources('users');

  if (users.status === '1xx') {
    return <LoadingBar type='sidebar' />;
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
