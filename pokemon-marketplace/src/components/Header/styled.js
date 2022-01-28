import styled from 'styled-components';
import faixa from '../../assets/faixa.jpg';

export const HeaderBar = styled.header`
  grid-area: MH;
  height: 18vh;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.81);
  z-index: 1;
  background-image: linear-gradient(
      180deg,
      rgba(245, 255, 0, 0.7) 0%,
      rgba(215, 206, 23, 0.6) 100%
    ),
    url(${faixa});
  background-repeat: repeat;
  background-position: center;
  background-size: 85rem;
`;
