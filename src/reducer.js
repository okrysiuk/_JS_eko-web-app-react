const initialState = {
  cards: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CARDS_REQUEST":
      return {
        ...state,
        cards: [],
        loading: true,
        error: null,
      };

    case "FETCH_CARDS_SUCCESS":
      return {
        ...state,
        cards: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_CARDS_FAILURE":
      return {
        ...state,
        cards: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
