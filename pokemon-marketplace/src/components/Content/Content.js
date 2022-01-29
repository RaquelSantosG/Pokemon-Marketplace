import React from 'react';
import * as S from './styled';
import HeaderContent from '../HeaderContent/HeaderContent';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/home';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';

function Content() {
  return (
    <S.Container>
      <HeaderContent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </S.Container>
  );
}

export default Content;
