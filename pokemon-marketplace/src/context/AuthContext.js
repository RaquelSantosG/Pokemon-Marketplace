import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(true);
  const user = { email: 'admin@gmail.com', senha: 'admin' };
  console.log(logged);

  return (
    <AuthContext.Provider value={{ logged, setLogged, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export function useAuth() {
  const context = useContext(AuthContext);

  const { logged, setLogged, user } = context;
  return {
    logged,
    setLogged,
    user,
  };
}
