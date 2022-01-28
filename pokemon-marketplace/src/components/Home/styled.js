import styled from 'styled-components';

export const Container = styled.div` 
  margin-top: 3rem;
  background-color: #f7f753;
  padding: 0.8rem;
  border-radius: 10px;
  
;`

export const Lista = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
;`

export const Item = styled.li`
  margin: 1rem;
;`

export const Card = styled.div`
  height: 20rem;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.4);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
;`

export const Imagem = styled.img`
  height: 10rem;
  width: 10rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
;`

export const Title = styled.h4`
  color: #6c605e;
  margin-bottom: 1rem;
;`

export const Tipo = styled.p`
  color: #6c605e;
  font-size: 0.9rem;
  margin-bottom: 1rem;
;`

export const Detalhes = styled.p`
  color: #6c605e;
  margin-bottom: 1rem;
;`

export const Preco = styled.p`
  color: #6c605e;
  font-weight: bold;
  margin-bottom: 1rem;
;`

export const Carrinho = styled.button`
  border: none;
  padding: 1rem 0;
  margin-bottom: 1rem;
;`