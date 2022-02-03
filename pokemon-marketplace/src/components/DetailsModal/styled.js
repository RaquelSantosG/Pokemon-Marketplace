import styled from 'styled-components';
import img from '../../assets/Amb.png';
import Pgo from '../../assets/Pokemarket.jpg';
import back from '../../assets/background1.png';

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
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
  height: 170px;
  width: 170px;
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
  box-shadow:-7px 5px 11px 0px rgba(0,0,0,0.55);
 
  background: linear-gradient(0deg, rgba(215,196,164,1) 14%, rgba(127,190,97,1) 35%, rgba(127,190,97,1) 66%, rgba(116,196,247,1) 80%);
`;

export const Name = styled.h4`
  color: #6c605e;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background-color: #fff;
  width: 100%;
  padding: 0.5rem 0.5rem;
 
  border-radius: 10px;
  font-size: 1.1rem;
  text-transform: uppercase;
  box-shadow: 2px 5px 7px -3px rgba(0, 0, 0, 0.65);
`;

export const Type = styled.h4`
  color: #000;
  margin-bottom: 1rem;
  
`;

export const FeatureTitle = styled.h4`
   color: #000;;
  margin-bottom: 0.5rem;
  
`;

export const Feature = styled.p`

  color: #000;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  display: flex;
  font-size: 0.6rem;
  line-height: 1.4;
  font-weight: bold;
`;

export const AddContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  background-color: #cecece;
  position: absolute;
  bottom: 0;
  margin-bottom: 1rem;
  padding: 5px 0;
  box-shadow: 2px 5px 7px -3px rgba(0, 0, 0, 0.65);
  border-radius: 10px;
`;

export const Preco = styled.h4`
  color: #6c605e;
  font-weight: bold;
  font-size: 1.3rem;
  margin-right: 1.5rem;
`;

export const Carrinho = styled.button`
  border: none;
  padding: 0.7rem 1rem;
  display: flex;
  background-color: #717171;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  transition: 0.5s;
  margin-right: 1rem;

  &:hover {
    background-color: #332f2e;
  }
`;
