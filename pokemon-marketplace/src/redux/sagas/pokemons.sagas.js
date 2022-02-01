import {
  //fork,
  put,
  take,
  takeEvery,
  //race,
  //takeLatest,
  call,
  //delay,
} from 'redux-saga/effects';

const fetchPokemons = async (url) => {
  return await fetch(url).then((res) => res.json());
};

function* getAllPokemons() {
  try {
    const pokemons = yield call(
      fetchPokemons('https://pokeapi.co/api/v2/pokemon/')
    );
    for (const el of pokemons.results) {
      const details = yield call(fetchPokemons(el.url));
      console.log(details);
      // yield put({ type: 'GET_POKEMONS', payload: details });
    }
  } catch (error) {}
}

function* funcTake() {
  console.log('funcTake');
  //const action = yield take('GET_POKEMONS');
  //console.log(action);
  yield takeEvery('CALL_SAGAS', getAllPokemons);
}

// function* funcTakeLast() {
//   console.log('funcTakeLast');
//   yield takeLatest('CALL_SAGA', getAllPokemons);
// }

export { funcTake };
