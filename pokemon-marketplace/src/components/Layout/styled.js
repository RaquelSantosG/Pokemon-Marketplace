import styled from 'styled-components';

/* **************************
  MH = Main Header
  AS = Aside
  CT = Content
 * **************************/
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 70px auto;
  grid-template-areas:
    'MH MH'
    'AS CT';
  height: 100vh;
  min-width: 315px;
`;
