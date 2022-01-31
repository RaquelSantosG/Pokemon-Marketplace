import React from 'react';
import * as S from './styled';

function TextInput({ label, placeholder, tipo, value, name, onChange }) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        type={tipo}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      ></S.Input>
    </S.Container>
  );
}

export default TextInput;
