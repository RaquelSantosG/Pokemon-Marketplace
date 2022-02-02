import { ADD_POKEMON, DELETE_POKEMON, GET_COUNTER } from './cartTypes';

export const addPokemon = (payload) => ({
  type: ADD_POKEMON,
  payload,
});

export const deletePokemon = (payload) => ({
  type: DELETE_POKEMON,
  payload,
});

export const getCounter = (payload) => ({
  type: GET_COUNTER,
  payload,
});
