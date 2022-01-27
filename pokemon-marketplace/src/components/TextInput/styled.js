import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 2.2rem;
`;

export const Label = styled.label`
  position: absolute;
  background-color: #fff;
  padding: 0.5rem;
  bottom: 2rem;
  left: 1.5rem;
`;

export const Input = styled.input`
  padding: 1rem;
  width: 20rem;
  border-radius: 0.3rem;
  border: none;
  outline: 2px solid #000;
  transition: all 0.3s;

  &:hover {
    outline: 2px solid #ec1010;
  }

  &:focus {
    outline: 2px solid #102eec;
  }
`;
