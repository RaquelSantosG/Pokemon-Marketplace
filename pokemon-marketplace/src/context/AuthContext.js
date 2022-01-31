import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(true);
  const user = { email: 'admin@gmail.com', senha: 'admin' };

  return (
    <AuthContext.Provider value={{ logged, setLogged, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
