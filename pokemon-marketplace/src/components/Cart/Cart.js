import React from 'react';
import * as S from './styled';

import AmountInput from '../AmountInput/AmountInput';
import CarrinhoModal from '../CarrinhoModal/CarrinhoModal';
import psyduck from '../../assets/psyduck.png';

import { useCart } from '../../hooks/useCart';

function Cart() {
  const {
    carrinho,
    carrinhoModal,
    delPokemon,
    navigate,
    handleCarrinhoModal,
    handleCart,
    total,
  } = useCart();

  return (
    <>
      <S.Container>
        <S.Content>
          <S.TitleGroup>
            <S.Produtos>Produtos</S.Produtos>
            <S.Quantidade>Quantidade</S.Quantidade>
            <S.Preco>Preço(R$)</S.Preco>
            <S.Subtotal>Subtotal(R$)</S.Subtotal>
          </S.TitleGroup>

          {carrinho.length > 0 ? (
            <S.ListaCarrinho>
              {carrinho.map((pokemon, index) => (
                <S.Item key={index}>
                  <S.Tabela>
                    <S.Body>
                      <S.Row>
                        <S.Dado>
                          <S.Imagem src={pokemon.image} alt="imagem pokemon" />
                        </S.Dado>
                        <S.Dado width="30%" style={{ textAlign: 'left' }}>
                          <S.Name>{pokemon.name}</S.Name>
                        </S.Dado>
                        <S.Dado>
                          <AmountInput
                            amount={pokemon.amount}
                            pokemonName={pokemon.name}
                          />
                        </S.Dado>
                        <S.Dado width="160px" style={{ textAlign: 'center' }}>
                          <S.Valor>{pokemon.price},00</S.Valor>
                        </S.Dado>
                        <S.Dado width="160px" style={{ textAlign: 'left' }}>
                          <S.Valor>{pokemon.total},00</S.Valor>
                        </S.Dado>
                        <S.Dado>
                          <S.Valor>
                            <S.Btn onClick={() => delPokemon(pokemon.name)}>
                              <S.TrashCan size={25} />
                            </S.Btn>
                          </S.Valor>
                        </S.Dado>
                      </S.Row>
                    </S.Body>
                  </S.Tabela>
                </S.Item>
              ))}
            </S.ListaCarrinho>
          ) : (
            <S.ListaVazia>
              <S.ListaVaziaMessage>
                Seu carrinho está vazio...
              </S.ListaVaziaMessage>
              <S.PsyDuck src={psyduck} alt="imagem de pokemon" />
            </S.ListaVazia>
          )}

          {carrinho.length > 0 && (
            <S.BtnContainer>
              <S.ComprarContent>
                <S.ComprarBtn onClick={() => navigate('/')}>
                  Continuar comprando
                </S.ComprarBtn>
              </S.ComprarContent>
              <S.TotalContent>
                <S.Total>Total: R$ {total},00 </S.Total>
                <S.FinalizarBtn
                  onClick={() => {
                    handleCarrinhoModal();
                    handleCart();
                  }}
                >
                  Finalizar compra
                </S.FinalizarBtn>
              </S.TotalContent>
            </S.BtnContainer>
          )}
        </S.Content>
      </S.Container>
      {carrinhoModal && <CarrinhoModal onClick={handleCarrinhoModal} />}
    </>
  );
}

export default Cart;
