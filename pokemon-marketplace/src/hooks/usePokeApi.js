import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsRequest } from '../redux/actions/pokeApiActions';


export function usePokeApi(){

  const storage = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const [pokemonsSagas, setPokemonsSagas] = useState([]);
  const [modal, setModal] = useState(false);
  const [pokemonSelected, setPokemonSelected] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (storage.pokemons !== undefined) {
      setPokemonsSagas(storage.pokemons);
      setLoading(false);
    }
  }, [storage.pokemons]);

  useEffect(() => {
    dispatch(getPokemonsRequest());
  }, [dispatch]);

  return{
     pokemonsSagas,
     modal,
     setModal,
     loading,
     pokemonSelected,
     setPokemonSelected,
  }
}