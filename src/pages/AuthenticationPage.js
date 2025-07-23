import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router-dom';
import './AuthenticationPage.css';

function AuthenticationPage() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const onSuccess = credentialResponse => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const userProfile = {
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
        sub: decoded.sub,
        contactNumber: '',
        deliveryAddress: ''
      };
      
      setUser(decoded);
      localStorage.setItem('user', JSON.stringify(decoded));
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
      setError('');
      navigate(from, { replace: true });
    } catch (err) {
      setError('Error processing authentication. Please try again.');
    }
  };

  const onError = (error) => {
    setError(error.detail || (isLoginMode ? 'Login Failed' : 'Registration Failed'));
  };

  if (user) {
    return (
      <div className="auth-page">
        <div className="auth-content">
          <h2>Welcome, {user.name}!</h2>
          <img src={user.picture} alt="profile" className="profile-image" />
          <p>Email: {user.email}</p>
          <p>You are now authenticated with Google.</p>
          <p>Redirecting to your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-content">
        <h2>{isLoginMode ? 'Login' : 'Register'} with Google</h2>
        <GoogleLogin onSuccess={onSuccess} onError={onError} />
        {error && <div className="error-message">{error}</div>}
        <div className="mode-switch">
          <button 
            onClick={() => setIsLoginMode(!isLoginMode)}
            className="mode-switch-btn"
          >
            {isLoginMode ? 'Need to register?' : 'Already have an account?'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationPage;
