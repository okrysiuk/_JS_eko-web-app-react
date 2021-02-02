import React from "react";
import "./shopping-cart-empty.css";

const ShoppingCartEmpty = () => {
  return (
    <div className="shopping-cart-empty">
      <div className="empty-cart-img-wrapper">
        <img src="./images/empty-cart.png" alt="empty cart" />
      </div>
      <h4>I'm so empty...</h4>
    </div>
  );
};

export default ShoppingCartEmpty;
