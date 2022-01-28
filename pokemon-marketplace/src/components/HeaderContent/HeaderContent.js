import React from 'react';
import * as S from './styled';

function HeaderContent() {
  return (
    <S.ContentBar>
      <S.Cart size={30} />
      <S.Person size={30} />
      <S.Logout size={30} />
    </S.ContentBar>
  );
}

export default HeaderContent;
