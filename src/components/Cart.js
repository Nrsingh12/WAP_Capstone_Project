import React from 'react';
import CartItem from './CartItem';
import './Cart.css';

function Cart({ cart, setCart }) {
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) return <div className="empty-cart">Your cart is empty.</div>;

  return (
    <div className="cart">
      {cart.map(item => (
        <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
      ))}
      <div className="cart-summary">
        <div>Total: ₹{total.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default Cart;
