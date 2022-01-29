import React from 'react';
import * as S from './styled';
import pikachu from '../../assets/pikachu.png';
import squirtle from '../../assets/squirtle.png';
import borboleta from '../../assets/borboleta.png';
import Charmander from '../../assets/Charmander.png';
import Ivysaur from '../../assets/Ivysaur.png';
import Ninetales from '../../assets/Ninetales.png';
import Bulbasaur from '../../assets/Bulbasaur.png';
import Palkia from '../../assets/palkia.png';
import Perrserker  from '../../assets/perrserker.png';
import flareon  from '../../assets/flareon.png';
import Purugly  from '../../assets/Purugly.png';









function Home() {
  let pokemons = [
    {id: 1, img: pikachu,  nome: 'Pikachu', tipo: 'Elétrico', preco: 'R$ 20.000,00'},
    { id: 2,img: Charmander, nome: 'Charmander', tipo: 'Fogo', preco: 'R$ 30.000,00' },
    { id: 3,img: squirtle, nome: 'squirtle', tipo: 'Água', preco: 'R$ 35.000,00' },
    { id: 4,img:Bulbasaur, nome: 'Bulbasaur', tipo: 'Grama/veneno', preco: 'R$ 35.000,00' },
    { id: 5, img:Palkia, nome: 'Palkia', tipo: 'Lendário', preco: 'R$ 260.000,00',},
    { id: 6, img:Perrserker , nome: 'Perrserker ', tipo: 'Lendário', preco: 'R$ 260.000,00',},
    { id: 7, img:flareon , nome: 'flareon ', tipo: 'Lendário', preco: 'R$ 260.000,00',},
    { id: 8, img:Purugly , nome: 'Purugly ', tipo: 'Lendário', preco: 'R$ 260.000,00',},





  ];
 
  return (
    <S.Container>
      <S.Lista>
        {pokemons.map((pokemon) => (
          <S.Item key={pokemon.id}>
            <S.Card>
              <S.Imagem src={pokemon.img} alt="foto pokemon" />
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