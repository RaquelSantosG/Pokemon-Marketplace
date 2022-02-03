import { cartTypes } from './cartTypes';

export const addPokemon = (payload) => ({
  type: cartTypes.ADD_POKEMONS,
  payload,
});

export const deletePokemon = (payload) => ({
  type: cartTypes.DELETE_POKEMON,
  payload,
});

export const resetPokemon = (payload) => ({
  type: cartTypes.RESET_LIST,
  payload,
});

export const decreaseAmount = (payload) => ({
  type: cartTypes.DECREASE_AMOUNT,
  payload,
});
