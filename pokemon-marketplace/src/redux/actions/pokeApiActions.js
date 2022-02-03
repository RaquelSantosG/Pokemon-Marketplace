import { pokemonApiTypes } from './pokeApiTypes';

export const getPokemonsRequest = () => ({
  type: pokemonApiTypes.GET_POKEMONS,
});

export const addPokemons = (payload) => ({
  type: pokemonApiTypes.ADD_POKEMONS,
  payload,
});
