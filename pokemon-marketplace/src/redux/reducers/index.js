import { combineReducers } from 'redux';

import pokeApiReducer from '../reducers/pokeApiReducer';
import cartReducer from '../reducers/cartReducer';

export default combineReducers({
  pokemons: pokeApiReducer,
  cart: cartReducer,
});
