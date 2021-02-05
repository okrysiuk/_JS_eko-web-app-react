import React from "react";
import CardList from "./../../components/card-list";
//import Cart from "./../../pages/cart";
import LandingSection from "./../../components/landing-section";
import MaterialButton from "./../../components/buttons/material-button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GotoCart = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: center;
`;

const Store = () => {
  return (
    <>
      <LandingSection
        title="Online store"
        titleColor="#fff"
        imgUrl="./images/store-page.jpg"
        isButtons={false}
      />
      <CardList />
      <GotoCart className="goto-cart-button-container">
        <Link to="/cart">
          <MaterialButton myStyle="success-outline medium">
            Shopping cart &#8594;
          </MaterialButton>
        </Link>
      </GotoCart>
    </>
  );
};

export default Store;
