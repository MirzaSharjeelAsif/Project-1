import React from "react";

const NavBar = ({ username, cartCount }) => (
  <div className="NavBar">
    <div className="NavUser">Hello, {username}</div>
    <div className="NavTitle">Groceries App🍎</div>
    <div className="NavCart">
      {/* Don't know why full-cart image is not working, it shows when I write a wrong syntax/code   */}
      <img
        src={
          cartCount === 0
            ? "src/assets/cart-empty.png"
            : "src/assets/cart-full.png"
        }
      />
    </div>
  </div>
);

export default NavBar;
