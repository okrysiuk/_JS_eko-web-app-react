import React, { Component } from "react";
import "./card-list.css";
import * as FaIcons from "react-icons/fa";

import CardItem from "./../card-item";

import { fetchCards, productAddedToCart } from "./../../actions.js";

import { connect } from "react-redux";

import { withEkoStoreService } from "./../hoc";

import { compose } from "./../../utils";

import Spinner from "./../spinner";
import ErrorNotification from "./../error-notification";

const CardList = ({ cards, onAddedToCart, cartItems }) => {
  const avoska = [];
  cartItems.map((item) => avoska.push(item.id));
  return (
    <div className="cards-container">
      {cards.map((card) => {
        return (
          <div key={card.id} className="card-item">
            <div className="check-icon">{(avoska.indexOf(card.id) !== -1) ? <FaIcons.FaCheckCircle /> : null}</div>
            <CardItem
              card={card}
              onAddedToCart={() => onAddedToCart(card.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

class CardListContainer extends Component {
  componentDidMount() {
    this.props.fetchCards();
  }
  render() {
    const { cards, loading, error, onAddedToCart, cartItems } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorNotification />;
    }

    return (
      <CardList
        cards={cards}
        onAddedToCart={onAddedToCart}
        cartItems={cartItems}
      />
    );
  }
}
const mapStateToProps = ({ cards, loading, error, cartItems }) => {
  return { cards, loading, error, cartItems };
};

const mapDispatchToProps = (dispatch, { ekoStoreService }) => {
  return {
    fetchCards: fetchCards(ekoStoreService, dispatch),
    onAddedToCart: (id) => dispatch(productAddedToCart(id)),
  };
};

export default compose(
  withEkoStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CardListContainer);