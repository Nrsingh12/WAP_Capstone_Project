import React from 'react';
import ProductList from '../components/ProductList';
import './Home.css';

function Home({ cart, setCart }) {
  return (
    <div className="home-page">
      <h1>Products</h1>
      <ProductList cart={cart} setCart={setCart} />
    </div>
  );
}

export default Home;
