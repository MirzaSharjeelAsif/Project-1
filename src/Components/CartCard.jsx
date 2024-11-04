import React from "react";
import QuantityCounter from "./QuantityCounter";

const CartCard = ({ item, updateQuantity, removeItem }) => (
  <div className="CartCard">
    <img src={item.image} alt={item.productName} />
    <div>
      <h4>{item.productName}</h4>
      <p>{item.price}</p>
      <p>Total: ${item.quantity * parseFloat(item.price.slice(1))}</p>
    </div>
    <QuantityCounter
      quantity={item.quantity}
      setQuantity={(qty) => updateQuantity(item, qty)}
    />
    <button className="EmptyButton" onClick={() => removeItem(item.id)}>
      Remove
    </button>
  </div>
);

export default CartCard;
