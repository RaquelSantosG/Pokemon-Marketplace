import React, { useContext, useState } from 'react';
import * as S from './styled';
import logo from '../../assets/pokeapi_logo.png';
import TextInput from '../TextInput/TextInput';
import AuthContext from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({ logged, setLogged }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  //const { setLogged } = useContext(AuthContext);

  const onSubmit = (e) => {
    if (email === 'admin' && senha === 'admin') {
      setLogged(true);
    } else {
      toast.error('Email ou Senha inválidos');
    }
    e.preventDefault();
  };

  return (
    <S.Container>
      <S.Content>
        <ToastContainer />
        <S.AuthContainer onSubmit={(e) => onSubmit(e)}>
          <S.Logo src={logo} alt="Pokeapi logo" />
          <S.Title>Faça o login</S.Title>
          <TextInput
            tipo="text"
            name="email"
            label={'E-mail'}
            placeholder="Digite seu e-mail..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            name="senha"
            tipo="password"
            label={'Senha'}
            placeholder="Digite sua senha..."
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <S.Forgotten href="">Esqueceu sua senha?</S.Forgotten>
          <S.SubmitButton type="submit">GO!</S.SubmitButton>
          <S.Paragraph>Ainda não é um treinador Pokémon?</S.Paragraph>
          <S.Cadastrar>Cadastre-se agora</S.Cadastrar>
        </S.AuthContainer>
        <S.Image />
      </S.Content>
    </S.Container>
  );
}

export default Login;
