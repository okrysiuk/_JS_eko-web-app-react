import React from "react";
import MaterialButton from "./../buttons/material-button";
import * as FiIcons from "react-icons/fi";

const CardItem = ({ card, onAddedToCart }) => {
  const { imageUrl, title, brand, capacity, price } = card;
  return (
    <>
      <div className="img-container">
        <img src={imageUrl} alt="card item" />
      </div>
      <div className="card-text-container">
        <h4>{title}</h4>
        <span>Capacity: {capacity}</span>
        <p>"{brand}"</p>
      </div>
      <div className="card-buttons-container">
          <strong>${price}</strong>
        <MaterialButton onClick={onAddedToCart} myStyle="success-fill medium">
          <FiIcons.FiShoppingCart />
        </MaterialButton>
      </div>
    </>
  );
};

export default CardItem;
