import React from "react";
import LandingSection from "./../../components/landing-section";
import CardList from "./../../components/card-list";
import Cart from "./../../pages/cart";
import MaterialButton from "../../components/buttons/material-button";
const Home = () => {
  return (
    <>
      <LandingSection />
      <MaterialButton />
      <CardList />
      <Cart />
    </>
  );
};

export default Home;
