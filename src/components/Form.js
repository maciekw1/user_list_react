import React, { useState } from 'react';
import FormValidator from './FormValidator.js';


export const Form = ({ onAdd }) => {
  const validator = new FormValidator([
    {
      field: "nickname",
      method: "isEmpty",
      validWhen: false,
      message: "Nickname is required."
    },
    {
      field: "email",
      method: "isEmpty",
      validWhen: false,
      message: "Email is required."
    },
    {
      field: "email",
      method: "isEmail",
      validWhen: true,
      message: "That is not a valid email."
    },
    {
      field: "ip",
      method: "isEmpty",
      validWhen: false,
      message: "IP address is required."
    },
    {
      field: "ip",
      method: "isIP",
      args: [4],
      validWhen: true,
      message: "That is not a valid IP address."
    }
  ]);

  const initialUserForm = {
    nickname: '',
    email: '',
    ip: '',
    validation: validator.valid()
  };

  const [userForm, setUserForm] = useState(initialUserForm);

  let submitted = false;

  const handleInputChange = event => {
    event.preventDefault();

    setUserForm(prevForm => ({
      ...prevForm,
      [event.target.name]: event.target.value
    }));
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const validation = validator.validate(userForm);
    setUserForm(prevForm => ({
      ...prevForm,
      validation
    }));
    submitted = true;

    if (validation.isValid) {
      onAdd(userForm);
      setUserForm(initialUserForm);
    }
  };

  const validation = submitted ? validator.validate(userForm) : userForm.validation;

  return (
    <form className="form">
      <h2 className="section__header">Enter user data</h2>

      <div className={validation.nickname.isInvalid ? "has-error" : ''}>
        <label className="form__label" htmlFor="nickname">
          Nickname:
        </label>
        <input type="nickname" className="form__input" name="nickname" placeholder="fizz" onChange={handleInputChange} value={userForm.nickname} />
        <span className="form__help">
          {validation.nickname.message}
        </span>
      </div>

      <div className={validation.email.isInvalid ? "has-error" : ''}>
        <label className="form__label" htmlFor="email">Email address:</label>
        <input type="email" className="form__input" name="email" placeholder="buzz@fizzbuzz.com" onChange={handleInputChange} value={userForm.email} />
        <span className="form__help">
          {validation.email.message}
        </span>
      </div>

      <div className={validation.ip.isInvalid ? "has-error" : ''}>
        <label className="form__label" htmlFor="ip">IP:</label>
        <input type="ip" className="form__input" name="ip" placeholder="x.x.x.x" onChange={handleInputChange} value={userForm.ip}  />
        <span className="form__help">
          {validation.ip.message}
        </span>
      </div>

      <button onClick={handleFormSubmit} className="button">
        Add user
      </button>
    </form>
  );
};
