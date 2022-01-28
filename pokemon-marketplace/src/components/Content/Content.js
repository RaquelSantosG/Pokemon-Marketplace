import React from 'react';
import * as S from './styled';
import HeaderContent from '../HeaderContent/HeaderContent';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/home';

function Content() {
  return (
    <S.Container>
      <HeaderContent />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </S.Container>
  );
}

export default Content;
