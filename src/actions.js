const cardsRequested = () => {
  return {
    type: "FETCH_CARDS_REQUEST",
  };
};

const cardsLoaded = (newBooks) => {
  return {
    type: "FETCH_CARDS_SUCCESS",
    payload: newBooks,
  };
};

const cardsError = (error) => {
  return {
    type: "FETCH_CARDS_FAILURE",
    payload: error,
  };
};

const fetchCards = (bookstoreService, dispatch) => () => {
  dispatch(cardsRequested());
  bookstoreService
    .getCards()
    .then((data) => dispatch(cardsLoaded(data)))
    .catch((err) => dispatch(cardsError(err)));
};

export { fetchCards };
