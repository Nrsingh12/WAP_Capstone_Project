import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [registered, setRegistered] = useState(false);
  const [username, setUsername] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (username.trim() !== '') setRegistered(true);
  };

  if (registered) {
    return (
      <div className="registration-form">
        <h2>Welcome, {username}!</h2>
        <p>Your registration was successful.</p>
      </div>
    );
  }

  return (
    <div className="registration-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="register-username">Username</label>
          <input
            id="register-username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="register-email">Email</label>
          <input id="register-email" type="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="register-password">Password</label>
          <input id="register-password" type="password" required />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
