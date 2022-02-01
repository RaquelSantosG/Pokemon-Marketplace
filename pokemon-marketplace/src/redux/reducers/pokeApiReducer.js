import { GET_POKEMONS } from '../actions/pokeApiTypes';

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
    default:
      return state;
  }
};

export default pokeApiReducer;