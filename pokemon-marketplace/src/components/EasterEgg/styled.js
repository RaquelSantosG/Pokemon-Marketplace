import styled from 'styled-components';
import img from '../../assets/Amb.png';

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: 26rem;
  width: 45rem;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  padding: 0.3rem;
  border: none;
  background: none;

  &:hover {
    opacity: 0.7;
  }
`;

export const Image = styled.img`
  width: 70px;
`;

export const LeftColumn = styled.div`
  width: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-size: 1000px;
  background-position: center;
`;

export const RightColumn = styled.div`
  width: 60rem;
  background-color: #e3dbda;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 2.5rem 1.5rem;
  box-shadow: -7px 5px 11px 0px rgba(0, 0, 0, 0.55);

  background: linear-gradient(
    0deg,
    rgba(116, 19, 247, 1) 14%,
    rgba(116, 196, 247, 1) 80%
  );
`;

export const Academia = styled.h4`
  color: #6c605e;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eec5fd;
  width: 100%;
  padding: 0.5rem 0.5rem;
  color: #bc36ee;
  border-radius: 10px;
  font-size: 1.1rem;
  box-shadow: 2px 5px 7px -3px rgba(0, 0, 0, 0.65);
`;

export const Text = styled.h4`
  color: #6c605e;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: #fff;
  width: 100%;
  padding: 0.5rem 0.5rem;

  border-radius: 10px;
  font-size: 1.1rem;
  box-shadow: 2px 5px 7px -3px rgba(0, 0, 0, 0.65);
`;

export const Treinadores = styled.div`
  display: flex;
  justify-content: center;
`;

export const TreinadoresImagem = styled.img`
  margin-top: 1rem;
  width: 75%;
`;

export const NomesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  margin-left: 5rem;
`;

export const TreinadorNome = styled.h4`
  margin-right: 1rem;

  color: #fff;
`;
