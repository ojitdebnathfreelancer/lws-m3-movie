const initialState = {
  cartData: [],
  showModal: false,
  selectedMovie: null,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const found = state.cartData.find(
        (item) => item.id === action.payload.id
      );
      if (!found) {
        return {
          ...state,
          cartData: [...state.cartData, action.payload],
        };
      } else {
        return state;
      }
    }

    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cartData: state.cartData.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }

    case "SHOW_MODAL": {
      return {
        ...state,
        showModal: true,
        selectedMovie: action.payload,
      };
    }

    case "CLOSE_MODAL": {
      return {
        ...state,
        showModal: false,
        selectedMovie: null,
      };
    }

    default:
      return state;
  }
};

export { initialState, cartReducer };
