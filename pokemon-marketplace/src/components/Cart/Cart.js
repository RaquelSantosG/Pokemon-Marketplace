import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import AmountInput from '../AmountInput/AmountInput';
import CarrinhoModal from '../CarrinhoModal/CarrinhoModal';
import psyduck from '../../assets/psyduck.png';
import { deletePokemon, resetPokemon } from '../../redux/actions/cartAction';

import { useDispatch, useSelector } from 'react-redux';

function Cart() {
  const [carrinhoModal, setCarrinhoModal] = useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
  const storage = useSelector((state) => state);
  const dispatch = useDispatch();

  const delPokemon = (name) => {
    dispatch(deletePokemon(name));
  };

  function handleCarrinhoModal() {
    setCarrinhoModal(!carrinhoModal);
  }

  const handleCart = () => {
    dispatch(resetPokemon());
  };

  useEffect(() => {
    console.log(storage);

    if (storage.cart.list !== undefined) {
      setCarrinho(storage.cart.list);
    }

    let totais = storage.cart.list.map((pokemon) => pokemon.total);
    let total = totais.reduce((total, numero) => total + numero, 0);
    setTotal(total);
  }, [storage]);

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
