import React from 'react';
import UserItem from './UserItem';


const UserList = ({ users, onUseClick }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserItem key={user.id} user={user} onUseClick={onUseClick} />
      ))}
    </div>
  );
};

export default UserList;