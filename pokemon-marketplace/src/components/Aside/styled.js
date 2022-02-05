import styled from 'styled-components';

export const MenuContainer = styled.div`
  grid-area: AS;
  height: 100%;
  background-color: #f7f753;
  position: relative;
  bottom: 0;
  left: 0;

  box-shadow: 4px 0px 7px -1px rgba(0, 0, 0, 0.2);
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

export const PikajuContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const Pikaju = styled.img`
  width: 3.5rem;
  position: absolute;
  bottom: 0px;
  cursor: pointer;
`;

export const Menu = styled.nav`
  margin-top: 6vh;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const MenuContent = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  background-color: #f7f55e;
  outline: 3px solid #cbc205;
  padding: 1.3rem 0;
  border-radius: 0.6rem;
  width: 86%;
  height: 45vh;
  box-shadow: 0px 2px 7px -1px rgba(0, 0, 0, 0.5);

  &:hover {
    outline: 3px solid #2042ec;
  }
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

    box-shadow: 0px 7px 7px -7px rgba(0, 0, 0, 0.5);
    transform: translateY(-4px);
  }

  &:active {
    box-shadow: 0px 5px 7px -1px rgba(0, 0, 0, 0.5);
    background-color: #f2fd00;
  }
`;

export const Content = styled.div`
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
