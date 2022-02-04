import {useState} from "react";
import { useAuth } from '../context/AuthContext';
import {toast} from 'react-toastify';

export function useLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { setLogged } = useAuth();
  
    const onSubmit = (e) => {
      if (email === 'admin' && senha === 'admin') {
        setLogged(true);
      } else {
        toast.error('Email ou Senha inválidos');
      }
      e.preventDefault();
    };

    return{
        email,
        setEmail,
        senha,
        setSenha,
        setLogged,
        onSubmit,
    }
}