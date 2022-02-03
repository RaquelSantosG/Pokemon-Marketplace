import styled from 'styled-components';
import { BsFillTrashFill } from 'react-icons/bs';

export const ListaVazia = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const PsyDuck = styled.img`
  height: 13rem;
`;

export const ListaVaziaMessage = styled.h3`
  font-size: 1.5rem;
`;

export const Container = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Content = styled.div`
  min-width: 90%;
  background-color: #fff;
  border-radius: 10px;
  padding: 0.8rem;
  box-shadow: 0px 11px 11px -10px rgba(0, 0, 0, 0.85);
`;

export const TitleGroup = styled.div`
  display: flex;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  background-color: #23296f;
  align-items: center;
  box-shadow: 0px 11px 11px -10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

export const Produtos = styled.h4`
  margin-right: 22.4rem;
  font-size: 0.9rem;
  color: #fff;
`;

export const Quantidade = styled.h4`
  font-size: 0.9rem;
  margin-right: 4.5rem;
  color: #fff;
`;

export const Preco = styled.h4`
  font-size: 0.9rem;
  margin-right: 3rem;
  color: #fff;
`;
export const Subtotal = styled.h4`
  font-size: 0.9rem;
  color: #fff;
`;

export const ListaCarrinho = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  padding: 0.5rem 0;
  background-color: #7cc0ea;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0px 11px 11px -10px rgba(0, 0, 0, 0.85);
  border: 4px solid #23296f;
`;

export const Tabela = styled.table`
  table-layout: fixed;
`;
export const Cabecalho = styled.thead``;
export const Row = styled.tr``;
export const Body = styled.tbody``;
export const Dado = styled.td`
  text-align: center;
  padding: 0 1rem;
`;

export const Name = styled.h4`
  font-size: 1.3rem;
  color: #342e2d;
  text-transform: capitalize;
`;

export const Imagem = styled.img`
  height: 110px;
  width: 110px;
`;

export const Valor = styled.h4`
  font-size: 0.9rem;
  color: #342e2d;
  font-weight: bold;
`;

export const Btn = styled.button`
  border: none;
  background: none;
`;

export const TrashCan = styled(BsFillTrashFill)`
  color: #fff;
  transition: all 0.6s;

  &:hover {
    color: #f25563;
    transform: scale(1.3);
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 1rem 0;
  margin-top: 2rem;
`;

export const ComprarContent = styled.div`
  position: relative;
`;

export const ComprarBtn = styled.button`
  margin-left: 2.6rem;
  border: none;
  padding: 1rem 0;
  width: 11rem;
  position: absolute;
  bottom: 0;
  border-radius: 10px;
  outline: 2px solid #64524f;
  color: #64524f;
  background-color: #fff;
  font-weight: bold;
  transition: all 0.5s;

  &:hover {
    opacity: 0.7;
    transform: translateY(-2px);
    box-shadow: 0px 12px 4px -7px rgba(0, 0, 0, 0.8);
  }

  &:active {
    box-shadow: 0px 6px 4px -7px rgba(0, 0, 0, 0.8);
  }
`;

export const Total = styled.p`
  font-size: 1.1rem;
  color: #342e2d;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const TotalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2.6rem;
`;

export const FinalizarBtn = styled.button`
  border: none;
  padding: 1rem 0;
  border-radius: 10px;
  background-color: #64524f;
  font-weight: bold;
  color: #fff;
  transition: all 0.5s;

  &:hover {
    opacity: 0.7;
    transform: translateY(-2px);
    box-shadow: 0px 12px 4px -10px rgba(0, 0, 0, 0.8);
  }

  &:active {
    box-shadow: 0px 6px 4px -7px rgba(0, 0, 0, 0.8);
  }
`;
