import React from "react";
import CartCard from "./CartCard";

const CartContainer = ({ cart, updateQuantity, removeItem, emptyCart }) => (
  <div className="CartContainer">
    <h3>Cart items: {cart.length}</h3>
    {cart.length === 0 ? (
      <p>No items in cart</p>
    ) : (
      cart.map((item) => (
        <CartCard
          key={item.id}
          item={item}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      ))
    )}
    <div className="CartListBtns">
      <button className="RemoveButton" onClick={emptyCart}>
        Empty Cart
      </button>
      <button id="BuyButton">Checkout: $</button>
    </div>
  </div>
);

export default CartContainer;
