import React, { useState } from "react";
import QuantityCounter from "./QuantityCounter";

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="ProductCard">
      <h3>{product.productName}</h3>
      <img src={product.image} alt={product.productName} />
      <p>{product.brand}</p>
      <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
      <p>{product.price}</p>
      <button
        onClick={function () {
          onAddToCart(product, quantity);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
