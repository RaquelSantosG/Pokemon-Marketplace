import React, { useState } from 'react';
import * as S from './styled';
import logo from '../../assets/pokeapi_logo.png';
import AmountInput from '../AmountInput/AmountInput';
import CarrinhoModal from '../CarrinhoModal/CarrinhoModal';

function Cart() {
  const [carrinhoModal, setCarrinhoModal] = useState(false);

  function handleCarrinhoModal() {
    setCarrinhoModal(!carrinhoModal);
  }

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
          <S.ListaCarrinho>
            <S.Item>
              <S.Tabela>
                <S.Body>
                  <S.Row>
                    <S.Dado>
                      <S.Imagem src={logo} alt="imagem pokemon" />
                    </S.Dado>
                    <S.Dado width="30%" style={{ textAlign: 'left' }}>
                      <S.Name>Wigglytuff</S.Name>
                    </S.Dado>
                    <S.Dado>
                      <AmountInput />
                    </S.Dado>
                    <S.Dado width="160px" style={{ textAlign: 'center' }}>
                      <S.Valor>20.000,00</S.Valor>
                    </S.Dado>
                    <S.Dado width="160px" style={{ textAlign: 'left' }}>
                      <S.Valor>20.000,00</S.Valor>
                    </S.Dado>
                    <S.Dado>
                      <S.Valor>
                        <S.Btn>
                          <S.TrashCan size={25} />
                        </S.Btn>
                      </S.Valor>
                    </S.Dado>
                  </S.Row>
                </S.Body>
              </S.Tabela>
            </S.Item>

            <S.Item>
              <S.Tabela>
                <S.Body>
                  <S.Row>
                    <S.Dado>
                      <S.Imagem src={logo} alt="imagem pokemon" />
                    </S.Dado>
                    <S.Dado width="30%" style={{ textAlign: 'left' }}>
                      <S.Name>Pikaju</S.Name>
                    </S.Dado>
                    <S.Dado>
                      <AmountInput />
                    </S.Dado>
                    <S.Dado width="160px" style={{ textAlign: 'center' }}>
                      <S.Valor>20.000,00</S.Valor>
                    </S.Dado>
                    <S.Dado width="160px" style={{ textAlign: 'left' }}>
                      <S.Valor>20.000,00</S.Valor>
                    </S.Dado>
                    <S.Dado>
                      <S.Valor>
                        <S.Btn>
                          <S.TrashCan size={25} />
                        </S.Btn>
                      </S.Valor>
                    </S.Dado>
                  </S.Row>
                </S.Body>
              </S.Tabela>
            </S.Item>
          </S.ListaCarrinho>

          <S.BtnContainer>
            <S.ComprarContent>
              <S.ComprarBtn>Continuar comprando</S.ComprarBtn>
            </S.ComprarContent>
            <S.TotalContent>
              <S.Total>Total: R$ 40.000,00</S.Total>
              <S.FinalizarBtn onClick={() => handleCarrinhoModal()}>
                Finalizar compra
              </S.FinalizarBtn>
            </S.TotalContent>
          </S.BtnContainer>
        </S.Content>
      </S.Container>
      {carrinhoModal && <CarrinhoModal onClick={handleCarrinhoModal} />}
    </>
  );
}

export default Cart;
