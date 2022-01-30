import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import { BsFillCartCheckFill } from 'react-icons/bs';

function CarrinhoModal({ onClick }) {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        <S.CloseBtn
          onClick={() => {
            onClick();
            navigate('/');
          }}
        >
          &#10005;
        </S.CloseBtn>
        <BsFillCartCheckFill
          size={30}
          color={'#7B7878'}
          style={{ marginBottom: '1rem' }}
        />
        <S.Message>Compra realizada com sucesso!</S.Message>
        <S.Paragraph>
          <S.Info>Em breve você receberá um</S.Info>
          <S.Info>e-mail com todos os detalhes</S.Info>
        </S.Paragraph>
        <S.HomeBtn onClick={() => navigate('/')}>Voltar para a home</S.HomeBtn>
      </S.Content>
    </S.Container>
  );
}

export default CarrinhoModal;
