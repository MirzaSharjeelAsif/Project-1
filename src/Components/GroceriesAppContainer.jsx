import React, { useState } from "react";
import products from "../data/products";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

const GroceriesAppContainer = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    if (quantity <= 0) {
      alert(" Add a quantity before adding it to the cart.");
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const updateQuantity = (product, quantity) => {
    if (quantity < 1) return removeItem(product.id);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const emptyCart = () => setCart([]);

  return (
    <div className="GroceriesApp-Container">
      <ProductsContainer products={products} onAddToCart={addToCart} />
      <CartContainer
        cart={cart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        emptyCart={emptyCart}
      />
    </div>
  );
};

export default GroceriesAppContainer;
