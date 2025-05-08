import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentForm.css';

function PaymentForm({ cart, setCart }) {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = e => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setCart([]);
      navigate('/');
    }, 3000);
  };

  if (success) {
    return (
      <div className="payment-success">
        <h2>Payment Successful!</h2>
        <p>Thank you for your purchase.</p>
        <p>Redirecting to home...</p>
      </div>
    );
  }

  return (
    <div className="payment-form">
      <h2>Payment Simulation</h2>
      <div className="order-summary">
        <p>Total Amount: ₹{total.toFixed(2)}</p>
      </div>
      <form onSubmit={handlePayment}>
        <button type="submit" className="payment-button">Simulate Payment</button>
      </form>
    </div>
  );
}

export default PaymentForm;
