import React from "react";
import ShoppingCartTable from "../../components/shopping-cart-table";
import LandingSection from "./../../components/landing-section";

const Cart = () => {
  return (
    <>
      <LandingSection
        title="Shopping cart"
        titleColor="white"
        imgUrl="./images/cart-page.jpg"
        isButtons={false}
      />
      <ShoppingCartTable />
    </>
  );
};

export default Cart;
