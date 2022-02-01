import React from 'react';
import * as S from './styled';

function Details({ pokemon, modal, setModal }) {
  const listaMovimentos = pokemon.moves.map((el) => el.move.name);
  listaMovimentos.join(', ');

  return (
    <S.Container>
      <S.Content>
        <S.CloseBtn onClick={() => setModal(!modal)}>&#10005;</S.CloseBtn>
        <S.LeftColumn>
          <S.Image
            src={pokemon.sprites.front_default}
            alt="imagem do pokemon"
          />
        </S.LeftColumn>
        <S.RightColumn>
          <S.Name>{pokemon.name}</S.Name>
          <S.Type>Tipo: {pokemon.types[0].type.name} </S.Type>
          <S.FeatureTitle>Movimentos:</S.FeatureTitle>
          <S.Feature> {listaMovimentos} </S.Feature>
          <S.AddContent>
            <S.Preco>Preço: {pokemon.weight},00</S.Preco>
            <S.Carrinho>Adicionar ao carrinho</S.Carrinho>
          </S.AddContent>
        </S.RightColumn>
      </S.Content>
    </S.Container>
  );
}

export default Details;
