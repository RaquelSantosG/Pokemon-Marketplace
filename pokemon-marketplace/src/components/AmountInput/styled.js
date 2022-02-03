import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 2.5rem;
  height: 3rem;
  border-radius: 10px;
  border: none;
  outline: 2px solid #cecece;
  margin: 5px;
  text-align: center;
  font-size: 1rem;
`;

export const Operacao = styled.button`
  width: 2rem;
  height: 3rem;
  border: none;
  font-size: 1.5rem;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 3px 3px -1px rgba(0, 0, 0, 0.5);
  background-color: #cecece;

  &:hover {
    background-color: #f2fd00;
  }

  &:active {
    background-color: #f2fd00;
    box-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.5);
  }
`;
