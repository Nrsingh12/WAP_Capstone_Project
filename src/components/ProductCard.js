import React, { useState } from 'react';
import './ProductCard.css';
import Toast from './Toast';
import './Toast.css';

export default function ProductCard({ product, cart, setCart }) {
  const [showToast, setShowToast] = useState(false);

  const addToCart = () => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <div className="product-card">
        <div className="image-container">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-title">{product.title}</div>
        <div className="product-price">₹{product.price}</div>
        <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
      </div>
      {showToast && (
        <Toast 
          message={`Added ${product.title} to cart!`} 
          onClose={() => setShowToast(false)} 
        />
      )}
    </>
  );
};
