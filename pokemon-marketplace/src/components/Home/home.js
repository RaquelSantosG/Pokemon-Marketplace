import React, { useEffect, useState } from 'react';
import * as S from './styled';
import Details from '../DetailsModal/Details';
import Loading from '../Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsRequest } from '../../redux/actions/pokeApiActions';

function Home() {
  const storage = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const [pokemonsSagas, setPokemonsSagas] = useState([]);
  const [modal, setModal] = useState(false);
  const [pokemonSelected, setPokemonSelected] = useState({});
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    if (storage.pokemons !== undefined) {
      setPokemonsSagas(storage.pokemons);
      setLoading(false);
    }

    console.log('storage:', storage.pokemons);
  }, [storage.pokemons]);

  useEffect(() => {
    dispatch(getPokemonsRequest());
    //getPokemons();
  }, []);

  if(loading) return <Loading />

  return (
    <S.Container>
      <S.Lista>
        {pokemonsSagas.map((pokemon) => (
          <S.Item key={pokemon.name}>
            <S.Card>
              {modal && (
                <Details
                  pokemon={pokemonSelected}
                  modal={modal}
                  setModal={setModal}
                />
              )}
              <S.Imagem
                src={pokemon.sprites.front_default}
                alt="foto pokemon"
              />
              <S.CardInfos>
                <S.Title>{pokemon.name}</S.Title>
                <S.Tipo>Pokemon tipo: {pokemon.types[0].type.name}</S.Tipo>
                <S.Detalhes>+ detalhes</S.Detalhes>
                <S.Preco>R$: {pokemon.weight},00</S.Preco>
                <S.Carrinho
                  onClick={() => {
                    setPokemonSelected(pokemon);
                    setModal(!modal);
                  }}
                >
                  Adicionar ao carrinho
                </S.Carrinho>
              </S.CardInfos>
            </S.Card>
          </S.Item>
        ))}
      </S.Lista>
    </S.Container>
  );
}

export default Home;
