import React from "react";
import CardList from "./../../components/card-list";
import Cart from "./../../pages/cart";
import LandingSection from "./../../components/landing-section";

const Store = () => {
  return (
    <>
      <LandingSection
        title="Online store"
        titleColor="white"
        imgUrl="./img/online-store-grape.jpg"
        isButtons={false}
      />
      <CardList />
      <Cart />
    </>
  );
};

export default Store;
