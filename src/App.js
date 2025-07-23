import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import AuthenticationPage from './pages/AuthenticationPage';
import CheckoutPage from './pages/CheckoutPage';
import UserProfile from './pages/UserProfile';
import './App.css';

function RequireAuth({ children }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const location = useLocation();
  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return children;
}

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <div className="app">
        <Navbar cart={cart} />
        <div className="main-content">
          <Routes>
            <Route path="/auth" element={<AuthenticationPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home cart={cart} setCart={setCart} />
                </RequireAuth>
              }
            />
            <Route
              path="/cart"
              element={
                <RequireAuth>
                  <CartPage cart={cart} setCart={setCart} />
                </RequireAuth>
              }
            />
            <Route
              path="/checkout"
              element={
                <RequireAuth>
                  <CheckoutPage cart={cart} setCart={setCart} />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
