import React, { useState } from 'react';
import CartItem from './CartItem';
import './Cart.css';

function Cart({ cart, setCart }) {
  const [error, setError] = useState('');

  const validateQuantity = (quantity) => {
    if (quantity < 1) {
      setError('Quantity must be at least 1');
      return false;
    }
    if (quantity > 100) {
      setError('Maximum quantity per item is 100');
      return false;
    }
    return true;
  };

  const updateQuantity = (id, quantity) => {
    if (!validateQuantity(quantity)) return;
    
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h3>Your cart is empty</h3>
        <p>Add items to your cart to continue shopping.</p>
      </div>
    );
  }

  return (
    <div className="cart">
      {error && <div className="error-message">{error}</div>}
      
      <div className="cart-items">
        {cart.map(item => (
          <CartItem 
            key={item.id} 
            item={item} 
            updateQuantity={updateQuantity} 
            removeItem={removeItem} 
          />
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="summary-item">
          <span>Subtotal:</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="summary-item total">
          <span>Total:</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="cart-actions">
        <button 
          className="continue-shopping" 
          onClick={() => window.history.back()}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Cart;
