import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from '../components/Cart';
import './CartPage.css';

function CartPage({ cart, setCart }) {
  const navigate = useNavigate();

  const proceedToPayment = () => {
    if (cart.length === 0) {
      alert('Cart is empty');
      return;
    }
    navigate('/payment');
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <Cart cart={cart} setCart={setCart} />
      {cart.length > 0 && (
        <button className="checkout-button" onClick={proceedToPayment}>
          Proceed to Payment
        </button>
      )}
    </div>
  );
}

export default CartPage;
