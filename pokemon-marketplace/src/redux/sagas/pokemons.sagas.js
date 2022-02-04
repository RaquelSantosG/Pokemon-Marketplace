import { addPokemons } from '../actions/pokeApiActions';
import { pokemonApiTypes } from '../actions/pokeApiTypes';

import { put, takeLatest, call, all } from 'redux-saga/effects';

const fetchPokemons = async (url) => {
  return await fetch(url).then((res) => res.json());
};

function* getAllPokemons() {
  try {
    const pokemons = yield call(
      fetchPokemons,
      'https://pokeapi.co/api/v2/pokemon/'
    );

    let listDetails = [];

    for (const el of pokemons.results) {
      const details = yield call(fetchPokemons, el.url);
      listDetails.push(details);
    }
    yield put(addPokemons(listDetails));
  } catch (error) {
    console.log(error);
  }
}

export default all([takeLatest(pokemonApiTypes.GET_POKEMONS, getAllPokemons)]);
