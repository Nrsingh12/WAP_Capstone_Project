import React, { useEffect, useState, useCallback } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      if (!response.ok) throw new Error('Failed to fetch categories');
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      setError('Failed to load categories. Please refresh the page.');
      console.error('Category fetch error:', err);
    }
  };

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const url =
        selected === "all"
          ? `https://fakestoreapi.com/products?limit=${itemsPerPage}&page=${page}`
          : `https://fakestoreapi.com/products/category/${encodeURIComponent(selected)}?limit=${itemsPerPage}&page=${page}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch products');
      
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError('Failed to load products. Please refresh the page.');
      console.error('Product fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, [selected, page, setLoading, setError]);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="product-container">
      <div className="category-bar">
        <button
          className={selected === "all" ? "active" : ""}
          onClick={() => setSelected("all")}
        >
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            className={selected === cat ? "active" : ""}
            onClick={() => setSelected(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      
      {error ? (
        <div className="error-message">{error}</div>
      ) : loading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading products...</p>
        </div>
      ) : (
        <div className="product-list">
          {products.length === 0 ? (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          ) : (
            products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                cart={cart}
                setCart={setCart}
              />
            ))
          )}
        </div>
      )}
      
      {products.length > 0 && (
        <div className="pagination">
          <button
            onClick={() => setPage(prev => Math.max(1, prev - 1))}
            disabled={page === 1}
            className="page-button"
          >
            Previous
          </button>
          <span className="page-info">
            Page {page}
          </span>
          <button
            onClick={() => setPage(prev => prev + 1)}
            className="page-button"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductList;
