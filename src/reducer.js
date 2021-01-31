const initialState = {
  cards: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 0,
  emailStatus: false,
  orderSending: false,
  firstName: null,
  lastName: null,
  phoneNumber: null,
};

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (card, item = {}, quantity) => {
  const { id = card.id, count = 0, title = card.title, brand = card.brand, total = 0 } = item;

  return {
    id,
    title,
    brand,
    count: count + quantity,
    total: total + quantity * card.price,
  };
};

const updateOrder = (state, productId, quantity) => {
  const { cards, cartItems } = state;

  const card = cards.find(({ id }) => id === productId);
  const itemIndex = cartItems.findIndex(({ id }) => id === productId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(card, item, quantity);
  const newCartItems = updateCartItems(cartItems, newItem, itemIndex);
  const newOrderTotal = newCartItems.reduce(
    (prev, next) => prev + next.total,
    0
  );
  return {
    ...state,
    emailStatus: false,
    cartItems: newCartItems,
    orderTotal: newOrderTotal,
  };
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

    case "PRODUCT_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "PRODUCT_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "ALL_PRODUCTS_REMOVED_FROM_CART":
      const item = state.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: action.payload,
        orderTotal: 0,
        emailStatus: true,
        orderSending: false,
        firstName: null,
        lastName: null,
        phoneNumber: null,
      };

    case "ORDER_SENDING_STATUS":
      return {
        ...state,
        orderSending: true,
      };

    case "FIRST_NAME_CHANGE":
      return {
        ...state,
        firstName: action.payload,
      };

    case "LAST_NAME_CHANGE":
      return {
        ...state,
        lastName: action.payload,
      };

    case "PHONE_NUMBER_CHANGE":
      return {
        ...state,
        phoneNumber: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
