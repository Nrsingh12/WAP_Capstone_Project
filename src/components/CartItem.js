import React from 'react';
import './CartItem.css';

function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <div className="cart-item-details">
        <h4>{item.title}</h4>
        <div className="cart-qty-row">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, Math.max(1, Number(e.target.value)))}
          />
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
        </div>
        <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
      </div>
      <p className="subtotal">₹{(item.price * item.quantity).toFixed(2)}</p>
    </div>
  );
}

export default CartItem;
