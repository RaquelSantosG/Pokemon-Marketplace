const initialState = {
  count: 0,
  list: [],
  price: 0,
  amount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      const cartReducer = state.list;
      cartReducer.push(action.payload);
      return {
        ...state,
        list: action.payload,
        count: state.count + 1,
      };
    case 'DELETE_POKEMON':
      return {
        ...state,
        cart: action.payload,
        count: state.count === 0 ? state.count : state.count - 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
