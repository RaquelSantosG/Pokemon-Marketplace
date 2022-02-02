const initialState = {
  count: 0,
  list: [],
  price: 0,
  amount: 1,
};

const cartReducer = (state = initialState, action) => {
  let list = [];

  switch (action.type) {
    case 'ADD_POKEMON':
      list = state.list;
      list.push(action.payload);
      return {
        ...state,
        list: list,
        count: state.count + 1,
      };
    case 'DELETE_POKEMON':
      list = state.list;
      const index = list.indexOf(action.payload);

      if (index > -1) {
        list.splice(index, 1);
      }
      return {
        ...state,
        list: list,
        count: state.count === 0 ? state.count : state.count - 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
