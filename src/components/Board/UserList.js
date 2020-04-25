import React from 'react';
import useResources from './useResources';
// import fixture from '../../fixtures/users';

const UserList = () => {
  const users = useResources('users');
  // const users = [...fixture];

  if (!users) {
    return <div>... loading, please wait</div>;
  }

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li className="user-list__item" key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
