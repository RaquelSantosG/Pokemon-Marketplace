import React from 'react';
import * as S from './styled';
import logo from '../../assets/pokeapi_logo.png';
import TextInput from '../TextInput/TextInput';

function Login() {
  return (
    <S.Container>
      <S.Content>
        <S.AuthContainer>
          <S.Logo src={logo} alt="Pokeapi logo" />
          <S.Title>Faça o login</S.Title>
          <TextInput label={'E-mail'} placeholder="Digite seu e-mail..." />
          <TextInput label={'Senha'} placeholder="Digite sua senha..." />
          <S.SubmitButton>GO!</S.SubmitButton>
        </S.AuthContainer>
        <S.Image />
      </S.Content>
    </S.Container>
  );
}

export default Login;
