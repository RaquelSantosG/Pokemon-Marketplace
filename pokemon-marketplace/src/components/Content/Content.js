import React from 'react';
import * as S from './styled';
import HeaderContent from '../HeaderContent/HeaderContent';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/home';
import Cart from '../Cart/Cart';

function Content() {
  return (
    <S.Container>
      <HeaderContent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
      </Routes>
    </S.Container>
  );
}

export default Content;
