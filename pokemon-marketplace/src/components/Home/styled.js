import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;
  background-color: #b5c9f9;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 5px 4px -1px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
`;

export const Lista = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  color: #0f5b55;
  padding: 0.4rem 0;
  margin-bottom: 1rem;
  font-weight: bold;
  text-transform: capitalize;
  border-bottom: 2px solid #0f5b55;
  background-color: rgba(236, 255, 0, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Tipo = styled.p`
  color: #0f5b55;
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

export const Detalhes = styled.p`
  color: #0f5b55;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const Preco = styled.p`
  color: #0f5b55;
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #23296f;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.4);
`;

export const PageButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.6rem;
  border: none;
  font-size: 1.2rem;
  background-color: #fcd1f1;
  font-weight: bold;
  color: #007aff;
  border-radius: 10px;
  outline: 3px solid #f99ee0;
  transition: all 0.5s;
  margin-left: 1.4rem;

  &:hover {
    background-color: #f729bf;
    color: #fff;
    transform: translateX(8px);
  }
`;
