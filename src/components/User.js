import React from 'react';

export const User = ({ onDelete, user }) => (
  <li className="users__record">
    <div className="users__record-item users__record-item_name">{user.nickname}</div>
    <div className="users__record-item users__record-item_email"><span className="users__record-item_label">Email:</span>{user.email}</div>
    <div className="users__record-item users__record-item_ip"><span className="users__record-item_label">IP:</span>{user.ip}</div>
    <button className="users__record-item button button_text" onClick={() => onDelete(user)}>Delete user</button>
  </li>
);

