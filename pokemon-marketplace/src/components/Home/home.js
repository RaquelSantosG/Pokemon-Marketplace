import React, { useEffect, useState } from 'react';
import * as S from './styled';
import pikachu from '../../assets/pikachu.png';
import squirtle from '../../assets/squirtle.png';
import Charmander from '../../assets/Charmander.png';
import Bulbasaur from '../../assets/Bulbasaur.png';
import Palkia from '../../assets/palkia.png';
import Perrserker from '../../assets/perrserker.png';
import flareon from '../../assets/flareon.png';
import Purugly from '../../assets/Purugly.png';

import Details from '../DetailsModal/Details';
import { useDispatch, useSelector } from 'react-redux';

import { funcTake } from '../../redux/sagas/pokemons.sagas';

function Home() {
  let pokes = [
    {
      id: 1,
      img: pikachu,
      nome: 'Pikachu',
      tipo: 'Elétrico',
      preco: 'R$ 20.000,00',
    },
    {
      id: 2,
      img: Charmander,
      nome: 'Charmander',
      tipo: 'Fogo',
      preco: 'R$ 30.000,00',
    },
    {
      id: 3,
      img: squirtle,
      nome: 'squirtle',
      tipo: 'Água',
      preco: 'R$ 35.000,00',
    },
    {
      id: 4,
      img: Bulbasaur,
      nome: 'Bulbasaur',
      tipo: 'Grama/veneno',
      preco: 'R$ 35.000,00',
    },
    {
      id: 5,
      img: Palkia,
      nome: 'Palkia',
      tipo: 'Lendário',
      preco: 'R$ 260.000,00',
    },
    {
      id: 6,
      img: Perrserker,
      nome: 'Perrserker ',
      tipo: 'Lendário',
      preco: 'R$ 260.000,00',
    },
    {
      id: 7,
      img: flareon,
      nome: 'flareon ',
      tipo: 'Lendário',
      preco: 'R$ 260.000,00',
    },
    {
      id: 8,
      img: Purugly,
      nome: 'Purugly ',
      tipo: 'Lendário',
      preco: 'R$ 260.000,00',
    },
    {
      id: 9,
      img: Purugly,
      nome: 'Purugly ',
      tipo: 'Lendário',
      preco: 'R$ 260.000,00',
    },
    {
      id: 10,
      img: Purugly,
      nome: 'Purugly ',
      tipo: 'Lendário',
      preco: 'R$ 260.000,00',
    },
    {
      id: 11,
      img: Purugly,
      nome: 'Purugly ',
      tipo: 'Lendário',
      preco: 'R$ 260.000,00',
    },
    {
      id: 12,
      img: Purugly,
      nome: 'Purugly ',
      tipo: 'Lendário',
      preco: 'R$ 260.000,00',
    },
  ];

  const storage = useSelector((state) => state);
  const dispatch = useDispatch();

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {}, []);

  // const getPokemons = async () => {
  //   const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
  //   const data = await response.json();
  //   console.log(data);
  // };

  const [modal, setModal] = useState(false);
  const [pokemonSelected, setPokemonSelected] = useState({});

  return (
    <S.Container>
      <S.Lista>
        {pokes.map((pokemon) => (
          <S.Item key={pokemon.id}>
            <S.Card>
              {modal && (
                <Details
                  pokemon={pokemonSelected}
                  modal={modal}
                  setModal={setModal}
                />
              )}
              <S.Imagem src={pokemon.img} alt="foto pokemon" />
              <S.Title>{pokemon.name}</S.Title>
              <S.Tipo>{pokemon.tipo}</S.Tipo>
              <S.Detalhes>+ detalhes</S.Detalhes>
              <S.Preco>{pokemon.preco}</S.Preco>
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
