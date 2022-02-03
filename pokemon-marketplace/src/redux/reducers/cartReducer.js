import { cartTypes } from '../actions/cartTypes';

const initialState = {
  count: 0,
  list: [],
};

const cartReducer = (state = initialState, action) => {
  let list = [];

  switch (action.type) {
    case cartTypes.ADD_POKEMONS:
      list = state.list;
      console.log(action.payload.name);
      let sameIndex = list.findIndex((el) => el.name === action.payload.name);

      if (sameIndex === -1 && action.payload.name !== undefined) {
        list.push(action.payload);
      } else {
        const samePokemon = list[sameIndex];
        list[sameIndex] = {
          ...samePokemon,
          amount: samePokemon.amount + 1,
          total: samePokemon.amount * samePokemon.total,
        };
      }

      return {
        ...state,
        list: list,
        count: list.length,
      };
    case cartTypes.DELETE_POKEMON:
      list = state.list.filter((pokemon) => pokemon.name !== action.payload);

      return {
        ...state,
        list: list,
        count: state.count === 0 ? state.count : state.count - 1,
      };
    // case cartTypes.INCREASE_AMOUNT:
    //   list = state.list;
    //   sameIndex = list.findIndex((el) => el.name === action.payload.name);
    //   const samePokemon = list[sameIndex];
    //   list[sameIndex] = { ...samePokemon, amount: samePokemon.amount + 1 };

    //   return {
    //     ...state,
    //     list: list,
    //   };
    case cartTypes.RESET_LIST:
      return {
        ...state,
        list: [],
        count: 0,
      };

    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
