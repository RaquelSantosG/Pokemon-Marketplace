import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 80%;
  background-color: #fff;
  border-radius: 10px;
  padding: 0.8rem;
  box-shadow: 0px 11px 11px -10px rgba(0, 0, 0, 0.85);
`;

export const TitleGroup = styled.div`
  display: flex;
  padding: 2rem 2rem 0;
  margin-bottom: 1rem;
`;

export const Produtos = styled.h4`
  margin-right: 12rem;
  font-size: 0.9rem;
  color: #6c605e;
`;

export const Quantidade = styled.h4`
  font-size: 0.9rem;
  margin-right: 5.5rem;
  color: #6c605e;
`;

export const Preco = styled.h4`
  font-size: 0.9rem;
  margin-right: 9rem;
  color: #6c605e;
`;
export const Subtotal = styled.h4`
  font-size: 0.9rem;
  color: #6c605e;
`;

export const ListaCarrinho = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  padding: 1rem 0 1rem 1rem;
  display: flex;
  align-items: center;
  background-color: #7cc0ea;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

export const Name = styled.h4`
  font-size: 1.2rem;
  color: #342e2d;
  margin-right: 3rem;
`;

export const Imagem = styled.img`
  height: 110px;
  width: 110px;
  margin-right: 2rem;
`;

export const Valor = styled.h4`
  font-size: 0.9rem;
  color: #342e2d;
  font-weight: bold;
  margin: 0 3rem;
`;
