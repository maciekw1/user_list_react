import React, { useState }from 'react';

import { UserList } from "./components/UserList.js";
import { FormContainer } from "./components/FormContainer.js";
import { DeleteListConfirmModal } from './components/DeleteListConfirmModal';

export const App = () => {
  const [isPanelBodyVisible, setIsPanelBodyVisible] = useState(false);
  const [users, setUsers] = useState([
    {
      nickname: "maciek",
      email: "mwojcinski@gmail.com",
      ip: "1.1.1.1",
    }
  ]);
  const [listToDelete, setListToDelete] = useState(false);

  const hasUsers = users.length > 0;

  const addUser = user => {
    setUsers([...users, user]);
  };

  const deleteUser = user => {
    const updatedUsers = users.filter(existingUser => existingUser !== user);
    setUsers(updatedUsers);
  };

  const toggleAddDisplay = () => {
    setIsPanelBodyVisible(!isPanelBodyVisible);
  };

  const deleteList = () => {
    setListToDelete(true);
  };

  const onDeleteConfirm = () => {
    setUsers([]);
    setListToDelete(false);
  };

  return (
    <div className="app">
      <FormContainer
        panelBodyVisible={isPanelBodyVisible}
        handleDisplayToggle={toggleAddDisplay}
        onAdd={addUser} />
      { hasUsers &&
        <UserList
          onDelete={deleteUser}
          users={users}
          onDeleteList={deleteList} />
      }
      <DeleteListConfirmModal deleteList={listToDelete} onConfirm={onDeleteConfirm} onCancel={() => setListToDelete(false)} />
    </div>
  );
};










