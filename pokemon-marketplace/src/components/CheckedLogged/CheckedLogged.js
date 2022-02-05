import React from 'react';
import Layout from '../Layout/Layout';
import Login from '../Login/Login';
import { BrowserRouter as Router } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

function CheckedLogged() {
  const { logged } = useAuth();

  return (
    <>
      {logged ? (
        <Router>
          <Layout />
        </Router>
      ) : (
        <Login />
      )}
    </>
  );
}

export default CheckedLogged;
