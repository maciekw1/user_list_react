import React from 'react';
import { User } from './User.js';

export const UserList = ({ users, onDelete, onDeleteList }) => {
  const handleDelete = user => {
    const [userToDelete] = users.filter(item => item === user);

    onDelete(userToDelete);
  };

  const usersList = (users).map((user, i) =>
    <User user={user}
      onDelete={handleDelete}
      key={i}
    />
  );

  return (
    <div className="section users">
      <header className="users__header">
        <h2 className="section__header">User list:</h2>
        <button className="button button_text" onClick={onDeleteList}>Delete list</button>
      </header>
      <ul className="users__record-list">
        {usersList}
      </ul>
    </div>
  );
};
