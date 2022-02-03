import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;
  background-color: #b5c9f9;
  padding: 1rem;
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
  height: 23rem;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.4);
  padding: 10px 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  outline: 4px solid #fed000;
  transition: all 0.1s;
  border: 7px solid #fff;
  background: linear-gradient(
    180deg,
    rgba(255, 215, 122, 1) 0%,
    rgba(255, 207, 48, 1) 49%,
    rgba(236, 255, 0, 1) 100%
  );

  &:hover {
    outline: 4px solid #007aff;
  }
`;

export const CardInfos = styled.div`
  padding: 0.5rem 0 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 10rem;
  padding-top: 0.1rem 0.5rem;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    rgba(255, 207, 48, 1) 0%,
    rgba(255, 248, 0, 1) 100%
  );
`;

export const Imagem = styled.img`
  height: 140px;
  width: 140px;
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
  margin-bottom: 0.5rem;
`;

export const Carrinho = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0.7rem 0;
  margin-bottom: 2rem;
  background-color: #4fb3ab;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  transition: all 0.5s;

  &:hover {
    background-color: #0f5b55;
    box-shadow: 0px 13px 7px -10px rgba(0, 0, 0, 0.84);
    transform: translateY(-3px);
  }

  &:active {
    box-shadow: 0px 8px 7px -10px rgba(0, 0, 0, 0.84);
  }
`;
