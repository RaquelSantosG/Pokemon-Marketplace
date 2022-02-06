import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPokemonsRequest,
  addNextPokemons,
  addThidPagePokemons,
} from '../redux/actions/pokeApiActions';

export function usePokeApi() {
  const storage = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const [pokemonsSagas, setPokemonsSagas] = useState([]);
  const [modal, setModal] = useState(false);
  const [pokemonSelected, setPokemonSelected] = useState({});
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState(1);

  useEffect(() => {
    if (storage.pokemons !== undefined) {
      setLoading(true);
      setPokemonsSagas(storage.pokemons);
      setLoading(false);
    }
  }, [storage.pokemons, dispatch, next]);

  useEffect(() => {
    if (next === 2) {
      setLoading(true);
      dispatch(addNextPokemons());
      setPokemonsSagas(storage.pokemons);
      setLoading(false);
    }
    if (next === 3) {
      setLoading(true);
      dispatch(addThidPagePokemons());
      setPokemonsSagas(storage.pokemons);
      setLoading(false);
    }
  }, [dispatch, storage.pokemons, next]);

  useEffect(() => {
    if (next === 1) {
      dispatch(getPokemonsRequest());
    }
  }, [dispatch, next]);

  return {
    pokemonsSagas,
    modal,
    setModal,
    loading,
    pokemonSelected,
    setPokemonSelected,
    setNext,
    next,
  };
}
