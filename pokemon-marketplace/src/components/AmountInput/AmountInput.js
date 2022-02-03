import React from 'react';
import * as S from './styled';
import { useDispatch } from 'react-redux';
import { addPokemon, decreaseAmount } from '../../redux/actions/cartAction';

function AmountInput({ amount, pokemonName }) {
  const dispatch = useDispatch();

  const increaseAmount = (pokemonName) => {
    dispatch(addPokemon({ name: pokemonName }));
  };

  const decrease = (pokemonName) => {
    dispatch(decreaseAmount({ name: pokemonName }));
  };

  return (
    <S.Container>
      <S.Operacao onClick={() => decrease(pokemonName)}>-</S.Operacao>
      <S.Input type="text" disabled={true} value={amount} />
      <S.Operacao onClick={() => increaseAmount(pokemonName)}>+</S.Operacao>
    </S.Container>
  );
}

export default AmountInput;
