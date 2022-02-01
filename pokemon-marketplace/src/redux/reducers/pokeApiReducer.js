import { ADD_POKEMONS, GET_POKEMONS } from '../actions/pokeApiTypes';

const initialState = {
  pokemons: [],
};

const pokeApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case ADD_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};

export default pokeApiReducer;
