import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentForm.css';

function PaymentForm({ cart, setCart }) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const validatePayment = () => {
    if (cart.length === 0) {
      setError('No items in cart');
      return false;
    }
    if (total <= 0) {
      setError('Invalid total amount');
      return false;
    }
    return true;
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    
    if (!validatePayment()) return;

    try {
      setLoading(true);
      setError('');
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // TODO: Implement actual payment processing
      
      setSuccess(true);
      setTimeout(() => {
        setCart([]);
        localStorage.removeItem('cart');
        navigate('/home');
      }, 3000);
    } catch (err) {
      setError('Payment failed. Please try again.');
      console.error('Payment error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="payment-success">
        <h2>Payment Successful!</h2>
        <p>Thank you for your purchase!</p>
        <p>Total Amount: ₹{total.toFixed(2)}</p>
        <p>Redirecting to home...</p>
      </div>
    );
  }

  return (
    <div className="payment-form">
      <h2>Complete Payment</h2>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handlePayment} className="payment-options">
        <div className="payment-method">
          <h3>Payment Method</h3>
          <div className="payment-methods">
            <label>
              <input type="radio" name="paymentMethod" value="card" defaultChecked />
              <span>Credit/Debit Card</span>
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="upi" />
              <span>UPI</span>
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="cod" />
              <span>Cash on Delivery</span>
            </label>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="payment-button"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
}

export default PaymentForm;
