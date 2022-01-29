import React from 'react';
import * as S from './styled';
import logo from '../../assets/pokeapi_logo.png';
import AmountInput from '../AmountInput/AmountInput';
import { BsFillTrashFill } from 'react-icons/bs';

function Cart() {
  return (
    <S.Container>
      <S.Content>
        <S.TitleGroup>
          <S.Produtos>Produtos</S.Produtos>
          <S.Quantidade>Quantidade</S.Quantidade>
          <S.Preco>Preço</S.Preco>
          <S.Subtotal>Subtotal</S.Subtotal>
        </S.TitleGroup>
        <S.ListaCarrinho>
          <S.Item>
            <S.Imagem src={logo} alt="imagem pokemon" />
            <S.Name>Pikaju</S.Name>
            <AmountInput />
            <S.Valor>R$ 20.000,00</S.Valor>
            <S.Valor>R$ 20.000,00</S.Valor>
            <BsFillTrashFill size={25} color={'#fff'} />
          </S.Item>
          <S.Item>
            <S.Imagem src={logo} alt="imagem pokemon" />
            <S.Name>Pikaju</S.Name>
            <AmountInput />
            <S.Valor>R$ 20.000,00</S.Valor>
            <S.Valor>R$ 20.000,00</S.Valor>
            <BsFillTrashFill size={25} color={'#fff'} />
          </S.Item>
        </S.ListaCarrinho>
      </S.Content>
    </S.Container>
  );
}

export default Cart;
