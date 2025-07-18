import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  useEffect(() => {
    setLoading(true);
    const url =
      selected === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${encodeURIComponent(selected)}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, [selected]);

  return (
    <div>
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
      {loading ? (
        <div className="loading">Loading products...</div>
      ) : (
        <div className="product-list">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
