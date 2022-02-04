import React from 'react';
import * as S from './styled';
import {FaShoppingCart} from 'react-icons/fa';
import {GiTwoCoins} from 'react-icons/gi';
import {MdCatchingPokemon} from 'react-icons/md';
import {useDetails} from '../../hooks/useDetails';

function Details({ pokemon, modal, setModal }) {
 
const {
  handleClick,
  listaMovimentos,
} = useDetails(pokemon);

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
          <S.Name>
            <MdCatchingPokemon style={{marginRight: 8}} size={25}/>
            {pokemon.name}
            </S.Name>
          <S.Type>Tipo: {pokemon.types[0].type.name} </S.Type>
          <S.FeatureTitle>Movimentos:</S.FeatureTitle>
          <S.Feature> {listaMovimentos} </S.Feature>
          <S.AddContent>
            <S.Preco>
            <GiTwoCoins style={{marginRight: 8}} size={25}/>
              Preço: R$ {pokemon.weight},00</S.Preco>
            <S.Carrinho onClick={() => handleClick()}>
              <FaShoppingCart style={{marginRight: 8}} size={18}/>
                Adicionar
            </S.Carrinho>
          </S.AddContent>
        </S.RightColumn>
      </S.Content>
    </S.Container>
  );
}

export default Details;
