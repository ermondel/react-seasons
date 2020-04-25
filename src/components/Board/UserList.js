import React from 'react';
import useResources from './useResources';

const UserList = () => {
  const users = useResources('users');

  if (!users) {
    return <div>... loading, please wait</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
