import React from "react";
import { connect } from "react-redux";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import MaterialButton from "./../buttons/material-button";
import Spinner from "./../spinner";
import ShoppingCartEmpty from "./../shopping-cart-empty";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

import {
  productAddedToCart,
  productRemovedFromCart,
  allProductsRemovedFromCart,
  clearCart,
  orderSendingStatus,
  firstNameChange,
  lastNameChange,
  phoneNumberChange,
} from "../../actions.js";

import "./shopping-cart-table.css";

const sendEmail = (items, onClear, onSending, first, last, phone, total) => {
  onSending();
  const templateParams = {
    items: JSON.stringify(items)
      .replace(/"id"/g, "Код")
      /* .replace(/"id":[+-]?(?<!\.)\b[0-9]+\b(?!\.[0-9]),/gi, "") */
      .replace(/"title"/g, " Товар")
      .replace(/"brand"/g, " Бренд")
      .replace(/"count"/g, " Кількість")
      .replace(/"total"/g, " Ціна")
      .replace(/\[{/, "")
      .replace(/\}]/, "")
      .replace(/},{/g, "_____"),
    first,
    last,
    phone,
    total,
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
        console.log(
          "SUCCESS! Order has been send.",
          response.status,
          response.text
        );
        onClear();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
};

const ShoppingCartTable = ({
  items,
  total,
  email,
  sending,
  onIncrease,
  onDecrease,
  onDelete,
  onClear,
  onSending,
  first,
  last,
  phone,
  onFirst,
  onLast,
  onPhone,
}) => {
  if (sending)
    return (
      <div className="spinner-container">
        <Spinner />
      </div>
    );
  if (total === 0 && !email) return <ShoppingCartEmpty />;
  if (total === 0 && email)
    return (
      <div className="shopping-cart-empty">
        <h2>YOUR ORDER HAS BEEN SEND ;)</h2>
        <p>We will call you back soon...</p>
        <Link to="/store">
          <MaterialButton myStyle="success-outline large">
            LET'S GO SHOPPING AGAIN !
            <FaIcons.FaCartArrowDown />
          </MaterialButton>
        </Link>
      </div>
    );
  const renderRow = (item, idx) => {
    const { id, title, brand, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{brand}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td id="buttons">
          <div className="buttons-container">
            <MaterialButton
              onClick={() => onDelete(id)}
              myStyle="danger-outline medium"
            >
              <FaIcons.FaRegTrashAlt />
            </MaterialButton>
            <div className="line" />
            <MaterialButton
              onClick={() => onDecrease(id)}
              myStyle="warning-outline medium"
            >
              <FiIcons.FiMinusCircle />
            </MaterialButton>
            <div className="line" />
            <MaterialButton
              onClick={() => onIncrease(id)}
              myStyle="success-outline medium"
            >
              <FiIcons.FiPlusCircle />
            </MaterialButton>
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
            <th>Brand</th>
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
      <div className="contact-form">
        <form>
          <p>Firstname:</p>
          <input type="text" onChange={(e) => onFirst(e)} />
          <p>Lastname:</p>
          <input type="text" onChange={(e) => onLast(e)} />
          <p>Phone:</p>
          <input type="text" onChange={(e) => onPhone(e)} />
        </form>
      </div>
      <div className="confirm-order-container">
        {/*<div className="spacer"></div>*/}
        <div className="confirm-order-btn">
          <MaterialButton
            onClick={() =>
              sendEmail(items, onClear, onSending, first, last, phone, total)
            }
            myStyle="success-fill large"
          >
            Confirm Order
          </MaterialButton>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  cartItems,
  orderTotal,
  emailStatus,
  orderSending,
  firstName,
  lastName,
  phoneNumber,
}) => {
  return {
    items: cartItems,
    total: orderTotal,
    email: emailStatus,
    sending: orderSending,
    first: firstName,
    last: lastName,
    phone: phoneNumber,
  };
};

const mapDispatchToProps = {
  onIncrease: productAddedToCart,
  onDecrease: productRemovedFromCart,
  onDelete: allProductsRemovedFromCart,
  onClear: clearCart,
  onSending: orderSendingStatus,
  onFirst: firstNameChange,
  onLast: lastNameChange,
  onPhone: phoneNumberChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
