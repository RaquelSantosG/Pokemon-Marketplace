import { ADD_POKEMON, DELETE_POKEMON } from '../actions/cartTypes';

const initialState = {
  count: 0,
  cart: [],
  price: 0,
  amount: 0,
};

const pokeApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMON:
      // const cartReducer = state.cart;
      // cartReducer.push(action.payload);
      return {
        ...state,
        cart: action.payload,
      };
    case DELETE_POKEMON:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default pokeApiReducer;
