import React from 'react';
import * as S from './styled';
import HeaderContent from '../HeaderContent/HeaderContent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Content() {
  return (
    <S.Container>
      <HeaderContent />
      <Router>
        {/* <Routes><Route path="/login" element={<Login />} /></Routes> */}
      </Router>
    </S.Container>
  );
}

export default Content;
