import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

function RegistrationForm() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSuccess = credentialResponse => {
    const decoded = jwtDecode(credentialResponse.credential); 
    setUser(decoded);
    localStorage.setItem('user', JSON.stringify({
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
      sub: decoded.sub,
    }));
    navigate(from, { replace: true });
  };

  const onError = () => {
    alert('Registration Failed');
  };

  if (user) {
    return (
      <div className="registration-form">
        <h2>Welcome, {user.name}!</h2>
        <img src={user.picture} alt="profile" style={{ borderRadius: '50%', width: 80, margin: 16 }} />
        <p>Your Google account has been registered.</p>
      </div>
    );
  }

  return (
    <div className="registration-form">
      <h2>Register with Google</h2>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </div>
  );
}

export default RegistrationForm;
