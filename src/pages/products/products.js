import React from "react";
import BrandSection from "./../../components/brand-section";
import CapacitySection from "./../../components/capacity-section";
import LandingSection from "./../../components/landing-section";
import "./products.css";

const Products = () => {
  return (
    <>
      <LandingSection
        title="Product range"
        titleColor="white"
        imgUrl="./images/products-page.jpg"
        isButtons={false}
      />
      <BrandSection />
      <CapacitySection />
    </>
  );
};

export default Products;
