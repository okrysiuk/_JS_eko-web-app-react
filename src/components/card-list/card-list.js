import React, { Component } from "react";
import "./card-list.css";

import CardItem from "./../card-item";

import { fetchCards } from "./../../actions.js";

import { connect } from "react-redux";

import { withEkoStoreService } from "./../hoc";

import { compose } from "./../../utils";

import Spinner from "./../spinner";
import ErrorNotification from "./../error-notification";

const CardList = ({ cards }) => {
  return (
    <div className="cards-container">
      {cards.map((card) => {
        return (
          <div key={card.id} className="card-item">
            <CardItem card={card} />
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
    const { cards, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorNotification />;
    }

    return <CardList cards={cards} />;
  }
}
const mapStateToProps = ({ cards, loading, error }) => {
  return { cards, loading, error };
};

const mapDispatchToProps = (dispatch, { ekoStoreService }) => {
  return {
    fetchCards: fetchCards(ekoStoreService, dispatch),
  };
};

export default compose(
  withEkoStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CardListContainer);
