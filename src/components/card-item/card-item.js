import React from "react";
//import "./card-item.css";
import WhiteButton from "./../buttons/white-button";

const CardItem = ({ card }) => {
  const { imageUrl, title, brand, capacity } = card;
  return (
    <>
      <div className="img-container">
        <img src={imageUrl} alt="Card item" />
      </div>
      <div className="card-inner-container">
        <h4>{title}</h4>
        <span>Capacity: {capacity}</span>
        <p>Brand: "{brand}"</p>
        <WhiteButton
          className="btns"
          buttonStyle="btn--outline-variant-item"
          buttonSize="btn--medium-variant-item"
        >
          Add to cart
        </WhiteButton>
      </div>
    </>
  );
};

export default CardItem;
