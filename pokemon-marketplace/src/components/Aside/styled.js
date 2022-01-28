import styled from 'styled-components';

export const MenuContainer = styled.div`
  grid-area: AS;
  height: 100vh;
  background-color: #f7f753;
`;

export const LogoContainer = styled.div`
  margin-top: 12vh;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 10rem;
  height: 4rem;
`;

export const Menu = styled.nav`
  margin-top: 5.5vh;
  display: flex;
  justify-content: center;
`;

export const MenuContent = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background-color: #f2fd00;
  padding: 1rem 0;
  border-radius: 1rem;
  width: 86%;
  box-shadow: 0px 2px 7px -1px rgba(0, 0, 0, 0.5);
`;

export const MenuItem = styled.li`
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  align-items: center;
  transition: all 0.4s;
  margin-bottom: 0.8rem;

  &:hover {
    background-color: #f8fbae;
    border-radius: 10px;
    box-shadow: 0px 10px 7px -1px rgba(0, 0, 0, 0.5);
    transform: translateY(-4px);
  }

  &:active {
    box-shadow: 0px 5px 7px -1px rgba(0, 0, 0, 0.5);
    background-color: #f2fd00;
  }
`;

export const Content = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  cursor: pointer;
  padding: 0.6rem 1rem;

  &:active {
    color: #001ffd;
  }
`;
