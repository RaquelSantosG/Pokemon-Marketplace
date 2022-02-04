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

      let sameIndex = list.findIndex((el) => el.name === action.payload.name);

      if (sameIndex === -1) {
        list.push(action.payload);
      } else {
        const samePokemon = list[sameIndex];
        let newPokemonAmount =
          samePokemon.amount === 10
            ? samePokemon.amount
            : samePokemon.amount + 1;

        console.log(samePokemon.amount);

        list[sameIndex] = {
          ...samePokemon,
          amount: newPokemonAmount,
          total: newPokemonAmount * samePokemon.price,
        };
      }

      return {
        ...state,
        list: list,
        count: list.length,
      };
    case cartTypes.DELETE_POKEMON:
      list = state.list;

      let sameIndexPoke = state.list.findIndex(
        (pokemon) => pokemon.name === action.payload
      );

      const samePoke = list[sameIndexPoke];

      let newPokemonAmount =
        samePoke.amount === 1 ? samePoke.amount : samePoke.amount - 1;

      list[sameIndexPoke] = {
        ...samePoke,
        amount: newPokemonAmount,
        total: newPokemonAmount * samePoke.total,
      };

      let delPokemon = list.filter(
        (pokemon) => pokemon.name !== action.payload
      );

      return {
        ...state,
        list: delPokemon,
        count: state.count === 0 ? state.count : state.count - 1,
      };
    case cartTypes.DECREASE_AMOUNT:
      list = state.list;
      let pokemonSameIndex = list.findIndex(
        (pokemon) => pokemon.name === action.payload.name
      );

      const pokemon = list[pokemonSameIndex];

      let newAmount =
        pokemon.amount === 1 ? pokemon.amount : pokemon.amount - 1;

      list[pokemonSameIndex] = {
        ...pokemon,
        amount: newAmount,
        total: newAmount * pokemon.price,
      };

      return {
        ...state,
        list: list,
      };
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
