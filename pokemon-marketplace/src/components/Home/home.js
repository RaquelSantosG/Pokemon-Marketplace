import React from 'react';
import * as S from './styled';
import Details from '../DetailsModal/Details';
import Loading from '../Loading/Loading';
import { FaShoppingCart } from 'react-icons/fa';
import { usePokeApi } from '../../hooks/usePokeApi';
import {
  MdNavigateNext,
  MdNavigateBefore,
  MdCatchingPokemon,
} from 'react-icons/md';

function Home() {
  const {
    pokemonsSagas,
    modal,
    setModal,
    loading,
    pokemonSelected,
    setPokemonSelected,
    setNext,
    next,
  } = usePokeApi();

  if (loading) return <Loading />;

  return (
    <S.Container>
      <S.ButtonContainer>
        <S.Buttons>
          <S.Pagina>Páginas: </S.Pagina>
          <S.PageButton
            onClick={() => setNext(1)}
            style={{
              backgroundColor: next === 1 ? '#f729bf' : '#fcd1f1',
              color: next === 1 ? '#fff' : '#007aff',
            }}
          >
            1
          </S.PageButton>
          <S.PageButton
            onClick={() => setNext(2)}
            style={{
              backgroundColor: next === 2 ? '#f729bf' : '#fcd1f1',
              color: next === 2 ? '#fff' : '#007aff',
            }}
          >
            2
          </S.PageButton>
          <S.PageButton
            onClick={() => setNext(3)}
            style={{
              backgroundColor: next === 3 ? '#f729bf' : '#fcd1f1',
              color: next === 3 ? '#fff' : '#007aff',
            }}
          >
            3
          </S.PageButton>
        </S.Buttons>

        <MdCatchingPokemon size={45} color={'#fcd1f1'} />
      </S.ButtonContainer>
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
                  <FaShoppingCart size={18} style={{ marginRight: '0.5rem' }} />
                  Adicionar
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
