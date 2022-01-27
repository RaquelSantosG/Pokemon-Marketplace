import React from 'react';
import * as S from './styled';

function TextInput({ label, placeholder }) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input type="text" placeholder={placeholder}></S.Input>
    </S.Container>
  );
}

export default TextInput;
