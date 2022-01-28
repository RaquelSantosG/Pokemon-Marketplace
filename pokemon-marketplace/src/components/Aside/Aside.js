import React from 'react';
import * as S from './styled';
import { MdHome, MdPerson } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../../assets/pokeapi_logo.png';

function Aside() {
  return (
    <S.MenuContainer>
      <S.LogoContainer>
        <S.Logo src={logo} alt="pokeapi logo" />
      </S.LogoContainer>

      <S.Menu>
        <S.MenuContent>
          <S.MenuItem>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <S.Content>
                <MdHome size={32} style={{ marginRight: '.5rem' }} />
                Home
              </S.Content>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <S.Content>
                <FaShoppingCart size={25} style={{ marginRight: '.5rem' }} />
                Poke Cart
              </S.Content>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <S.Content>
                <MdPerson size={35} style={{ marginRight: '.5rem' }} />
                Perfil
              </S.Content>
            </Link>
          </S.MenuItem>
        </S.MenuContent>
      </S.Menu>
    </S.MenuContainer>
  );
}

export default Aside;
