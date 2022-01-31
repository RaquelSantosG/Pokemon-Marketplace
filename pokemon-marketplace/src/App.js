import React, { useContext, useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import { BrowserRouter as Router } from 'react-router-dom';
//import { AuthProvider } from './context/AuthContext';
//import AuthContext from './context/AuthContext';

function App() {
  //const { logged } = useContext(AuthContext);
  //const logged = setLogged;
  //console.log(logged);
  const [logged, setLogged] = useState(false);

  return (
    <>
      <GlobalStyles />
      {logged ? (
        <Router>
          <Layout />
        </Router>
      ) : (
        <Login logged={logged} setLogged={setLogged} />
      )}
    </>
  );
}

export default App;
