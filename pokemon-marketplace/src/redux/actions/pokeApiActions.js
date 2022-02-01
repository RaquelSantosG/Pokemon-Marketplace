import { GET_POKEMONS } from './pokeApiTypes';

export const getPokemons = (payload) => ({
  type: GET_POKEMONS,
  payload,
});
