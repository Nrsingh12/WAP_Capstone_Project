import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (username.trim() !== '') setLoggedIn(true);
  };

  if (loggedIn) {
    return (
      <div className="login-form">
        <h2>Welcome, {username}!</h2>
        <p>You have successfully logged in.</p>
      </div>
    );
  }

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login-username">Username</label>
          <input
            id="login-username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <input id="login-password" type="password" required />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
