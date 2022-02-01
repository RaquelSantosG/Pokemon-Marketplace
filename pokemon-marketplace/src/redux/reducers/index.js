import { combineReducers } from 'redux';

import PokeApiReducer from '../reducers/pokeApiReducer';

export default combineReducers({
  pokemons: PokeApiReducer,
});
