import React from "react";
import { connect } from "react-redux";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import Button from "./../buttons/white-button";
import emailjs from "emailjs-com";

import {
  productAddedToCart,
  productRemovedFromCart,
  allProductsRemovedFromCart,
} from "../../actions.js";

import "./shopping-cart-table.css";

const sendEmail = (items) => {
  const templateParams = {
    items: JSON.stringify(items),
  };
  emailjs
    .send(
      "service_sdk9cs3",
      "template_6qjpew6",
      templateParams,
      "user_KxMT1zo5Pgc7UfsuTiqJV"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
};

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td id="buttons">
          <div className="buttons-container">
            &#8195;
            <Button
              onClick={() => onDelete(id)}
              className="btns"
              buttonStyle="btn--outline-variant-item"
              buttonSize="btn--medium-variant-item"
            >
              <FaIcons.FaRegTrashAlt />
            </Button>
            &#8195;
            <Button
              onClick={() => onDecrease(id)}
              className="btns"
              buttonStyle="btn--outline-variant-item"
              buttonSize="btn--medium-variant-item"
            >
              <FiIcons.FiMinusCircle />
            </Button>
            &#8195;
            <Button
              onClick={() => onIncrease(id)}
              className="btns"
              buttonStyle="btn--outline-variant-item"
              buttonSize="btn--medium-variant-item"
            >
              <FiIcons.FiPlusCircle />
            </Button>
            &#8195;
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart">
      <div className="table-header-container">
        <h2>Your Order</h2>
      </div>
      <table id="shopping-cart-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className="total-price-container">
        <div className="spacer"></div>
        <h4>Total: ${total}</h4>
      </div>
      <div className="total-price-container">
        <div className="spacer"></div>
        <Button
          onClick={() => sendEmail(items)}
          className="btns"
          buttonStyle="btn--outline-variant-item"
          buttonSize="btn--medium-variant-item"
        >
          Send Order
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = {
  onIncrease: productAddedToCart,
  onDecrease: productRemovedFromCart,
  onDelete: allProductsRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
