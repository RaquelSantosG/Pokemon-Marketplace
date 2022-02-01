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
  border: none;
  background: none;
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
