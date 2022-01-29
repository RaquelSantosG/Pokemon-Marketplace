import React from 'react';
import * as S from './styled';

function AmountInput({ value }) {
  return (
    <S.Container>
      <S.Operacao>-</S.Operacao>
      <S.Input type="text" disabled={true} value={value} />
      <S.Operacao>+</S.Operacao>
    </S.Container>
  );
}

export default AmountInput;
