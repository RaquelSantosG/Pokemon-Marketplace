import React, { useEffect, useState } from 'react';
import * as S from './styled';

import Details from '../DetailsModal/Details';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const storage = useSelector((state) => state);
  const dispatch = useDispatch();

  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    const result = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await result.json();

    let listaDetalhes = [];

    for (const el of data.results) {
      const details = await fetch(el.url);
      const detailsData = await details.json();
      listaDetalhes.push(detailsData);
    }

    setPokemons(listaDetalhes);
  };

  useEffect(() => {
    getPokemons();
    console.log(pokemons);
  }, []);

  const [modal, setModal] = useState(false);
  const [pokemonSelected, setPokemonSelected] = useState({});

  return (
    <S.Container>
      <S.Lista>
        {pokemons.map((pokemon) => (
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
            </S.Card>
          </S.Item>
        ))}
      </S.Lista>
    </S.Container>
  );
}

export default Home;
