import React, { useState } from 'react';
import * as S from './styled';
import { MdHome, MdPerson } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import EasterEgg from '../EasterEgg/EasterEgg';

import logo from '../../assets/pokeapi_logo.png';
import pikaju from '../../assets/pikachuball.gif';

function Aside() {
  const [modalEasterEgg, setModalEasterEgg] = useState(false);

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
                <MdHome size={35} style={{ marginRight: '.5rem' }} />
                Home
              </S.Content>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/carrinho" style={{ textDecoration: 'none' }}>
              <S.Content>
                <FaShoppingCart size={28} style={{ marginRight: '.5rem' }} />
                Poke Cart
              </S.Content>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/profile" style={{ textDecoration: 'none' }}>
              <S.Content>
                <MdPerson size={35} style={{ marginRight: '.5rem' }} />
                Perfil
              </S.Content>
            </Link>
          </S.MenuItem>
          <S.PikajuContainer onClick={() => setModalEasterEgg(!modalEasterEgg)}>
            <S.Pikaju src={pikaju} alt="pikaju" />
          </S.PikajuContainer>
        </S.MenuContent>
      </S.Menu>
      {modalEasterEgg && (
        <EasterEgg
          modalEasterEgg={modalEasterEgg}
          setModalEasterEgg={setModalEasterEgg}
        />
      )}
    </S.MenuContainer>
  );
}

export default Aside;
