import React from 'react';

export const DeleteListConfirmModal = ({ deleteList, onCancel, onConfirm }) => {
  return deleteList ? (
    <div className="confirm-modal">
      <div className="confirm-modal-body">
        Are you sure you want to delete the entire user list?
        <div className="confirm-modal-button-group">
          <button onClick={onConfirm}>yes</button>
          <button onClick={onCancel}>no</button>
        </div>
      </div>
    </div>
  ) : null;
};
