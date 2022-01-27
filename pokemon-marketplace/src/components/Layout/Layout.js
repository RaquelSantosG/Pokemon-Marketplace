import React from 'react';
import { Grid } from './styled';
import Header from '../Header/Header';
import Aside from '../Aside/Aside';
import Content from '../Content/Content';

function Layout() {
  return (
    <Grid>
      <Header />
      <Aside />
      <Content />
    </Grid>
  );
}

export default Layout;
