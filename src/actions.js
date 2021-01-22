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

export const productAddedToCart = (productId) => {
  return {
    type: "PRODUCT_ADDED_TO_CART",
    payload: productId,
  };
};

export const productRemovedFromCart = (productId) => {
  return {
    type: "PRODUCT_REMOVED_FROM_CART",
    payload: productId,
  };
};

export const allProductsRemovedFromCart = (productId) => {
  return {
    type: "ALL_PRODUCTS_REMOVED_FROM_CART",
    payload: productId,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
    payload: [],
  };
};

export const orderSendingStatus = () => {
  return {
    type: "ORDER_SENDING_STATUS",
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
