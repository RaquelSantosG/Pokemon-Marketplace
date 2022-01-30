import styled from 'styled-components';

export const Container = styled.div `
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(161, 149, 146, 0.8);
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const Content = styled.div`
  height: 40%;
  width: 20%;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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

export const Message = styled.h4`
  font-size: 0.85rem;
`;

export const Paragraph = styled.div`
  margin: 1.2rem 0;
  text-align: center;
`;

export const Info = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  color: #7e7676;
  line-height: 1.4;
`;

export const HomeBtn = styled.button`
  border: none;
  background-color: #3c3232;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 6px;
  transition: 0.5s;

  &:hover {
    opacity: 0.7;
  }
`;