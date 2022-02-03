import React from 'react';
import * as S from './styled';
import { useDispatch } from 'react-redux';
import { addPokemon } from '../../redux/actions/cartAction';

function AmountInput({ amount, pokemonName }) {
  const dispatch = useDispatch();

  const increaseAmount = (name) => {
    dispatch(addPokemon(name));
  };

  // const decrease = () => {
  //   dispatch({ type: 'DECREASE_AMOUNT' });
  // };

  return (
    <S.Container>
      <S.Operacao>-</S.Operacao>
      <S.Input type="text" disabled={true} value={amount} />
      <S.Operacao onClick={() => increaseAmount(pokemonName)}>+</S.Operacao>
    </S.Container>
  );
}

export default AmountInput;
