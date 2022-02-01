import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;
  background-color: #b5c9f9;
  padding: 3rem;
  border-radius: 10px;
`;

export const Lista = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  margin: 1rem;
`;

export const Card = styled.div`
  height: 22rem;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.4);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    outline: 4px solid #007aff;
  }
`;

export const Imagem = styled.img`
  height: 140px;
  width: 140px;
  margin-bottom: 0.1rem;
  margin-top: 0.5rem;
`;

export const Title = styled.h4`
  color: #6c605e;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

export const Tipo = styled.p`
  color: #6c605e;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
`;

export const Detalhes = styled.p`
  color: #6c605e;
  margin-bottom: 1rem;
`;

export const Preco = styled.p`
  color: #6c605e;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Carrinho = styled.button`
  border: none;
  padding: 1rem 0;
  margin-bottom: 2rem;
  background-color: #717171;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  transition: all 0.5s;

  &:hover {
    background-color: #4f4a49;
    box-shadow: 0px 13px 7px -10px rgba(0, 0, 0, 0.84);
    transform: translateY(-3px);
  }

  &:active {
    box-shadow: 0px 8px 7px -10px rgba(0, 0, 0, 0.84);
  }
`;
