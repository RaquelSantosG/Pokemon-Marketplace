import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPokemonsRequest,
  addNextPokemons,
} from '../redux/actions/pokeApiActions';

export function usePokeApi() {
  const storage = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const [pokemonsSagas, setPokemonsSagas] = useState([]);
  const [modal, setModal] = useState(false);
  const [pokemonSelected, setPokemonSelected] = useState({});
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (storage.pokemons !== undefined) {
      setLoading(true);
      setPokemonsSagas(storage.pokemons);
      setLoading(false);
    }
  }, [storage.pokemons, dispatch, next]);

  useEffect(() => {
    if (next) {
      setLoading(true);
      dispatch(addNextPokemons());
      setPokemonsSagas(storage.pokemons);
      setLoading(false);
    }
  }, [dispatch, storage.pokemons, next]);

  useEffect(() => {
    if (!next) {
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
    next,
    setNext,
  };
}
