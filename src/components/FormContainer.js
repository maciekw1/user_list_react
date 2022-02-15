import React from 'react';
import { Form } from './Form.js';

export const FormContainer = ({ handleDisplayToggle, onAdd, panelBodyVisible }) => {
  const displayPanelBody = {
    display: panelBodyVisible ? 'block' : 'none'
  };

  return (
    <div className="section form-container">
      <header className="section__header form-container__header" onClick={handleDisplayToggle}>
        Add new user
      </header>
      <div className="form-container__body" style={displayPanelBody}>
        <Form onAdd={user => onAdd(user)}/>
      </div>
    </div>
  );
};
