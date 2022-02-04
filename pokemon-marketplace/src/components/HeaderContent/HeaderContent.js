import React, { useEffect, useState } from 'react';
import * as S from './styled';
import {useHeader} from '../../hooks/useHeader';

function HeaderContent() {

  const{counter,setLogged,navigate,user} = useHeader();

  return (
    <S.ContentBar>
      <S.Login>Bem Vindo: {user.email}</S.Login>
      <S.Btn onClick={() => navigate('/carrinho')}>
        {Number(counter) > 0 && (
          <S.ContadorContainer>
            <S.Contador>{counter}</S.Contador>
          </S.ContadorContainer>
        )}
        <S.Cart size={30} />
      </S.Btn>
      <S.Btn onClick={() => navigate('/profile')}>
        <S.Person size={30} />
      </S.Btn>
      <S.Btn>
        <S.Logout size={30} onClick={() => setLogged(false)} />
      </S.Btn>
    </S.ContentBar>
  );
}

export default HeaderContent;
