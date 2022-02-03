import { pokemonApiTypes } from '../actions/pokeApiTypes';

const initialState = {
  pokemons: [],
};

const pokeApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case pokemonApiTypes.GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case pokemonApiTypes.ADD_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};

export default pokeApiReducer;
