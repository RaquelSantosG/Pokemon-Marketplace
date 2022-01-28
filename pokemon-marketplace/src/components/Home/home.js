import React from 'react';
import * as S from './styled';
import logo from '../../assets/pokeapi_logo.png';

function Home() {
  const pokemons = [
    { id: 1, nome: 'Pikachu', tipo: 'Elétrico', preco: 'R$ 20.000,00' },
    { id: 2, nome: 'Bulbasaur', tipo: 'Natureza', preco: 'R$ 45.000,00' },
    { id: 3, nome: 'Charmander', tipo: 'Fogo', preco: 'R$ 20.000,00' },
    { id: 4, nome: 'Squirtle', tipo: 'Água', preco: 'R$ 20.000,00' },
    { id: 5, nome: 'Blastoise', tipo: 'Elétrico', preco: 'R$ 20.000,00' },
    { id: 6, nome: 'Ivysaur ', tipo: 'Elétrico', preco: 'R$ 20.000,00' },
    { id: 7, nome: 'Ninetales', tipo: 'Elétrico', preco: 'R$ 20.000,00' },
    { id: 8, nome: 'Butterfree ', tipo: 'Elétrico', preco: 'R$ 20.000,00' },
  ];

  return (
    <S.Container>
      <S.Lista>
        {pokemons.map((pokemon) => (
          <S.Item key={pokemon.id}>
            <S.Card>
              <S.Imagem src={logo} alt="foto pokemon" />
              <S.Title>{pokemon.nome}</S.Title>
              <S.Tipo>{pokemon.tipo}</S.Tipo>
              <S.Detalhes>+ detalhes</S.Detalhes>
              <S.Preco>{pokemon.preco}</S.Preco>
              <S.Carrinho>Adicionar ao carrinho</S.Carrinho>
            </S.Card>
          </S.Item>
        ))}
      </S.Lista>
    </S.Container>
  );
}

export default Home;