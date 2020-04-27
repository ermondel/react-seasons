import React from 'react';
import useResources from './useResources';
import LoadingBarSidebar from '../LoadingBarSidebar';
import Error5xx from '../Error5xx';

const BoardUserList = () => {
  const users = useResources('users');

  if (users.status === '1xx') {
    return <LoadingBarSidebar />;
  }

  if (users.status === '5xx') {
    return <Error5xx imgOnly={true} />;
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

export default BoardUserList;
