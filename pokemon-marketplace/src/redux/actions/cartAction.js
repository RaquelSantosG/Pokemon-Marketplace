import {
  ADD_POKEMON,
  DELETE_POKEMON,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  INCREASE_COUNT,
  DECREASE_COUNT,
} from './cartTypes';

export const addPokemon = (payload) => ({
  type: ADD_POKEMON,
  payload,
});

export const deletePokemon = (payload) => ({
  type: DELETE_POKEMON,
  payload,
});

export const increaseAmount = (payload) => ({
  type: INCREASE_AMOUNT,
  payload,
});

export const decreaseAmount = (payload) => ({
  type: DECREASE_AMOUNT,
  payload,
});

export const increaseCount = (payload) => ({
  type: INCREASE_COUNT,
  payload,
});

export const decreaseCount = (payload) => ({
  type: DECREASE_COUNT,
  payload,
});
