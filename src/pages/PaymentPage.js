import React from 'react';
import PaymentForm from '../components/PaymentForm';
import './PaymentPage.css';

function PaymentPage({ cart, setCart }) {
  return (
    <div className="payment-page">
      <h1>Checkout</h1>
      <PaymentForm cart={cart} setCart={setCart} />
    </div>
  );
}

export default PaymentPage;
