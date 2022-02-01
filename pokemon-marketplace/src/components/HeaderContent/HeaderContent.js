import React from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function HeaderContent() {
  const navigate = useNavigate();
  const { setLogged } = useAuth();

  return (
    <S.ContentBar>
      <S.Btn onClick={() => navigate('/carrinho')}>
        <S.Cart size={30} />
      </S.Btn>
      <S.Btn onClick={() => navigate('/perfil')}>
        <S.Person size={30} />
      </S.Btn>
      <S.Btn>
        <S.Logout size={30} onClick={() => setLogged(false)} />
      </S.Btn>
    </S.ContentBar>
  );
}

export default HeaderContent;
