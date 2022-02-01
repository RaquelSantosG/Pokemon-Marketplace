import {
  //fork,
  put,
  take,
  takeEvery,
  //race,
  takeLatest,
  call,
  all,
  //delay,
} from 'redux-saga/effects';

const fetchPokemons = async (url) => {
  return await fetch(url).then((res) => res.json());
};

function* getAllPokemons() {
  console.log('Entrou!');
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
    console.log('listagem', listDetails);
    yield put({ type: 'ADD_POKEMONS', payload: listDetails });
  } catch (error) {
    console.log(error);
  }
}

// function* funcTake() {
//   console.log('funcTake');
//   const action = yield take('GET_POKEMONS');
//   console.log(action);
//   yield takeEvery('CALL_SAGAS', getAllPokemons);
// }

// function* funcTakeLast() {
//   console.log('funcTakeLast');
//   yield takeLatest('CALL_SAGA', getAllPokemons);
// }

export default all([takeLatest('GET_POKEMONS', getAllPokemons)]);
