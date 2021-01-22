import React from "react";
import LandingSection from "./../../components/landing-section";
import CardList from "./../../components/card-list";
import Cart from "./../../pages/cart";
const Home = () => {
  return (
    <>
      <LandingSection />
      <CardList />
      <Cart />
    </>
  );
};

export default Home;
