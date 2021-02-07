import React from "react";
import MaterialButton from "./../buttons/material-button";
import "./landing-section.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LandingWrapper = styled.div`
  background: url(${(props) => props.imgUrl}) center center/cover no-repeat;
  margin-top: 56px;
  height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
`;

const LandingTitle = styled.h1`
  text-transform: uppercase;
  font-size: 4rem;
  color: ${(props) => props.titleColor};
  margin-top: -2rem;
  @media screen and (max-width: 960px) {
    font-size: 4rem;
    margin-top: -1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 3rem;
    margin-top: -0.8rem;
  } ;
`;

const ButtonsWrapper = styled.div`
  margin-top: 32px;
`;

const LandingSectionButtons = () => {
  return (
    <ButtonsWrapper>
      <Link to="/products">
        <MaterialButton myStyle="transparent-white medium">PRODUCTS</MaterialButton>
      </Link>
      <Link to="/store">
        <MaterialButton myStyle="white medium">
          ONLINE STORE
        </MaterialButton>
      </Link>
    </ButtonsWrapper>
  );
};

const LandingSection = ({ title, isButtons, imgUrl, titleColor }) => {
  return (
    <LandingWrapper imgUrl={imgUrl} className="landing-container">
      <LandingTitle titleColor={titleColor}>{title}</LandingTitle>
      {isButtons ? <LandingSectionButtons /> : null}
    </LandingWrapper>
  );
};

export default LandingSection;
