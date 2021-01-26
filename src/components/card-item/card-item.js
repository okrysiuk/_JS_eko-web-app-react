import React from "react";
//import "./card-item.css";
//import WhiteButton from "./../buttons/white-button";
import MaterialButton from "./../buttons/material-button";

const CardItem = ({ card, onAddedToCart }) => {
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
        <MaterialButton
          onClick={onAddedToCart}
          myStyle='success-fill medium'
        >
          Add to cart
        </MaterialButton>
      </div>
    </>
  );
};

export default CardItem;
