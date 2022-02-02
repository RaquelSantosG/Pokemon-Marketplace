import styled from 'styled-components';
import { MdPerson, MdOutlineLogout } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';

export const ContentBar = styled.div`
  height: 3rem;
  width: 100%;
  background-color: #b5c9f9;
  box-shadow: 0px 8px 8px -7px rgba(0, 0, 0, 0.61);
  border-radius: 0.3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem;
  position: relative;
`;

export const Login = styled.span`
  color: #081366;
  font-size: 1.1rem;
  font-weight: bold;
  position: absolute;
  left: 10px;
`;

export const Btn = styled.button`
  position: relative;
  border: none;
  background: none;
`;

export const ContadorContainer = styled.div`
  height: 1.3rem;
  width: 1.3rem;
  background-color: RGBA(255, 255, 255, 0.69);
  position: absolute;
  z-index: 1;
  border-radius: 50px;
  right: 1.2rem;
  top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 6px 16px -6px #000000;
`;

export const Contador = styled.h6`
  font-weight: bold;
  font-size: 0.9rem;
  color: #081366;
`;

export const Cart = styled(FaShoppingCart)`
  color: #4a68fc;

  &:hover {
    color: #081366;
  }
`;

export const Person = styled(MdPerson)`
  margin: 1rem;
  color: #4a68fc;

  &:hover {
    color: #081366;
  }
`;

export const Logout = styled(MdOutlineLogout)`
  color: #4a68fc;

  &:hover {
    color: #081366;
  }
`;
