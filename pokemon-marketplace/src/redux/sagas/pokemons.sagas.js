import {
  //fork,
  //put,
  // take,
  takeEvery,
  //race,
  // takeLatest,
  call,
  //delay,
} from 'redux-saga/effects';

const fetchPokemons = async (url) => {
  return await fetch(url).then((res) => res.json());
};

function* getAllPokemons() {
  try {
    const pokemons = yield call(
      fetchPokemons(`https://pokeapi.co/api/v2/pokemon/`)
    );
    for (const el of pokemons.results) {
      const details = yield call(fetchPokemons(el.url));
      console.log(details);
    }
  } catch (error) {}
}

function* funcTake() {
  console.log('funcTake');
  yield takeEvery('CALL_SAGA', getAllPokemons);
}

export { funcTake, getAllPokemons };
