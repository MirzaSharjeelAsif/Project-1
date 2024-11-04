import React from "react";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ products, onAddToCart }) => (
  <div className="ProductsContainer">
    {products.map((product) => (
      <ProductCard
        id={product.id}
        product={product}
        onAddToCart={onAddToCart}
      />
    ))}
  </div>
);

export default ProductsContainer;
