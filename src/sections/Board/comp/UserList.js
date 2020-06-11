import React from 'react';

const UserList = ({ list }) => (
  <ul className='user-list'>
    {list.map((user) => (
      <li className='user-list__item' key={user.id}>
        {user.name}
      </li>
    ))}
  </ul>
);

export default UserList;
