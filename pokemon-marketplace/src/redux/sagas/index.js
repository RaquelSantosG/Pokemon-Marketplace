import { all } from 'redux-saga/effects';

import pokemons from './pokemons.sagas';

export default function* rootSagas() {
  return yield all([pokemons]);
}
