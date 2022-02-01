import React, { useContext, useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { AuthProvider } from './context/AuthContext';
import CheckedLogged from './components/Teste/CheckedLogged';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyles />
          <CheckedLogged />
        </PersistGate>
      </AuthProvider>
    </Provider>
  );
}

export default App;
