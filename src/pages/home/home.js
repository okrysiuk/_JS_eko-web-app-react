import React from "react";
import LandingSection from "./../../components/landing-section";
//import CardList from "./../../components/card-list";
//import Cart from "./../../pages/cart";
const Home = () => {
  return (
    <>
      <LandingSection
        title="Feel the soul of the native land"
        titleColor="white"
        imgUrl="./img/green-apple-landing.jpg"
        isButtons={true}
      />
    </>
  );
};

export default Home;
