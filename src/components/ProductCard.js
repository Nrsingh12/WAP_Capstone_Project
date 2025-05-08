import React from 'react';
import './ProductCard.css';

function ProductCard({ product, cart, setCart }) {
  const addToCart = () => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-title">{product.title}</div>
      <div className="product-price">₹{product.price}</div>
      <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
