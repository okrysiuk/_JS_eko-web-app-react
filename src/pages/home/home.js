import React from "react";
import LandingSection from "./../../components/landing-section";
import WhySection from "./../../components/why-section";

const Home = () => {
  return (
    <>
      <LandingSection
        title="Feel the soul of the native land"
        titleColor="white"
        imgUrl="./images/green-apple-landing.jpg"
        isButtons={true}
      />
      <WhySection />
    </>
  );
};

export default Home;
