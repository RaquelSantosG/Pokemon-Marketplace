import React from 'react';
import * as S from './styled';
import running from '../../assets/running.gif';
import { MdGroupWork } from 'react-icons/md';
import treinadores from '../../assets/treinadores.png';

function EasterEgg({ modalEasterEgg, setModalEasterEgg }) {
  return (
    <S.Container>
      <S.Content>
        <S.CloseBtn onClick={() => setModalEasterEgg(!modalEasterEgg)}>
          &#10005;
        </S.CloseBtn>
        <S.LeftColumn>
          <S.Image src={running} alt="imagem do pokemon" />
        </S.LeftColumn>
        <S.RightColumn>
          <S.Text>
            <MdGroupWork size={30} style={{ marginRight: '.5rem' }} />
            Grupo 2
          </S.Text>
          <S.Text> Obrigado pela Oportunidade!!!</S.Text>
          <S.Academia> Academia Front-End: Accenture</S.Academia>
          <S.Treinadores>
            <S.TreinadoresImagem src={treinadores} alt="foto dos treinadores" />
          </S.Treinadores>
          <S.NomesContainer>
            <S.TreinadorNome style={{ marginRight: '3rem' }}>
              Raquel Gomes
            </S.TreinadorNome>
            <S.TreinadorNome>André Leão</S.TreinadorNome>
            <S.TreinadorNome>Mathues Albuquerque</S.TreinadorNome>
          </S.NomesContainer>
        </S.RightColumn>
      </S.Content>
    </S.Container>
  );
}

export default EasterEgg;
