import React from 'react';
import * as S from './styled';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Aside() {
  return (
    <S.MenuContainer>
      <S.Menu>
        <S.MenuContent>
          <S.MenuItem>
            <MdHome size={28} style={{ marginRight: '.2rem' }} />
            Home
          </S.MenuItem>
        </S.MenuContent>
      </S.Menu>
    </S.MenuContainer>
  );
}

export default Aside;
