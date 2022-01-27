import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
      <GlobalStyles />
      {login ? <Layout /> : <Login />}
    </>
  );
}

export default App;
