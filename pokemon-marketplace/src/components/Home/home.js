import React from 'react';
import * as S from './styled';
import Details from '../DetailsModal/Details';
import Loading from '../Loading/Loading';
import { FaShoppingCart } from 'react-icons/fa';
import { usePokeApi } from '../../hooks/usePokeApi';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

function Home() {
  const {
    pokemonsSagas,
    modal,
    setModal,
    loading,
    pokemonSelected,
    setPokemonSelected,
    next,
    setNext,
  } = usePokeApi();

  if (loading) return <Loading />;

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
                  <FaShoppingCart size={18} style={{ marginRight: '0.5rem' }} />
                  Adicionar
                </S.Carrinho>
              </S.CardInfos>
            </S.Card>
          </S.Item>
        ))}
      </S.Lista>
      <S.ButtonContainer>
        <S.PageButton onClick={() => setNext(!next)}>
          {next ? <MdNavigateBefore size={30} /> : <MdNavigateNext size={30} />}
          {next ? 'Anterior' : 'Próxima'}
        </S.PageButton>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default Home;
