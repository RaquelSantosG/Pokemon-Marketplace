import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/home';



function App() {
  const [login, setLogin] = useState(true);

  return (
    <>
      <GlobalStyles />
      {login ? (
        <Router>
          <Layout />
        </Router>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
