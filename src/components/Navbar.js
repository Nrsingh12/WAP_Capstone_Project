import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cart }) {
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">🛒 ShopCart</Link>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link">
          Cart <span className="cart-count">{itemCount}</span>
        </Link>
        {user ? (
          <>
            <span className="nav-user">Hi, {user.name.split(' ')[0]}</span>
            <button className="nav-link nav-logout" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
