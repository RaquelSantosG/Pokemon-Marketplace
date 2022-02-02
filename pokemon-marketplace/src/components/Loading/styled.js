import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  height: 14rem;
  width: 20rem;
  border-radius: 15px;
  display: flex;
  padding: 2rem;
  background-repeat: no-repeat;
  box-shadow: 0px 4px 5px -1px rgba(0, 0, 0, 0.79);
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ30RMxueo7sRAoKtpd2AqNMZD6TRIdyG5oE3UR88IB-Okm8D6xRvJxXA9bteNIQidOqeM&usqp=CAU');
  background-size: 25rem;
`;

export const Text = styled.div`
  display: flex;
`;

export const tittle = styled.img`
  height: 6rem;
  width: 8em;
  position: absolute;
  top: 4rem;
  left: 6rem;
`;

export const LoadImage = styled.img`
  height: 3rem;
  width: 3em;
  position: absolute;
  bottom: 5px;
  right: 0;
  margin-right: 20px;
`;
