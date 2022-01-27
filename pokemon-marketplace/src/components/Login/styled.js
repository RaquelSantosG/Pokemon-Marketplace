import styled from 'styled-components';
import pikaju from '../../assets/pikaju.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cecece;
`;

export const Content = styled.div`
  height: 30rem;
  width: 50rem;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.3);
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`;

export const Title = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.7rem;
`;

export const Logo = styled.img`
  height: 3rem;
  width: 7rem;
  margin-bottom: 2rem;
`;

export const Image = styled.div`
  height: 100%;
  width: 30rem;
  background-image: url(${pikaju});
  background-size: 30rem;
  background-repeat: no-repeat;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

export const Forgotten = styled.h5`
  display: flex;
  text-decoration: underline;
  font-weight: 500;
  color: #037799;
  margin-top: 5px;
  margin-bottom: 2rem;
  justify-content: flex-end;
  cursor: pointer;

  &:hover {
    color: #053544;
  }
`;

export const SubmitButton = styled.button`
  padding: 1rem 0;
  background-color: #cecece;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  transition: 0.5s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.3);
    background-color: #f7ef38;
  }

  &:active {
    background-color: #f7ef38;
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.4;
  margin-top: 1.5rem;
`;

export const Cadastrar = styled(Paragraph)`
  font-weight: bold;
  margin-top: 0;
`;
