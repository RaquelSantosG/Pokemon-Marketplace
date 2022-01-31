import React from 'react';
import * as S from './styled';

function Details({ pokemon, modal, setModal }) {
  return (
    <S.Container>
      <S.Content>
        <S.CloseBtn onClick={() => setModal(!modal)}>&#10005;</S.CloseBtn>
        <S.LeftColumn>
          <S.Image src={pokemon.img} alt="imagem do pokemon" />
        </S.LeftColumn>
        <S.RightColumn>
          <S.Name>{pokemon.nome}</S.Name>
          <S.Feature>Tipo: {pokemon.tipo} </S.Feature>
          <S.Feature>Movimentos: </S.Feature>
          <S.AddContent>
            <S.Preco>{pokemon.preco}</S.Preco>
            <S.Carrinho>Adicionar ao carrinho</S.Carrinho>
          </S.AddContent>
        </S.RightColumn>
      </S.Content>
    </S.Container>
  );
}

export default Details;