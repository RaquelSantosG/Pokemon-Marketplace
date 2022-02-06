import { pokemonApiTypes } from './pokeApiTypes';

export const getPokemonsRequest = () => ({
  type: pokemonApiTypes.GET_POKEMONS,
});

export const addPokemons = (payload) => ({
  type: pokemonApiTypes.ADD_POKEMONS,
  payload,
});

export const addNextPokemons = (payload) => ({
  type: pokemonApiTypes.GET_NEXT_POKEMONS,
  payload,
});

export const addThidPagePokemons = (payload) => ({
  type: pokemonApiTypes.GET_THIRD_PAGE_POKEMONS,
  payload,
});
