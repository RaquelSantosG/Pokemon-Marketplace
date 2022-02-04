import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSelector } from 'react-redux';
import { useState , useEffect} from 'react';



export function useHeader(){

  const navigate = useNavigate();
  const { setLogged, user } = useAuth();
  const [counter, setCounter] = useState();

  const storage = useSelector((state) => state);

  useEffect(() => {
    if (storage.cart.count !== undefined) {
      setCounter(storage.cart.count);
    }
  }, [storage]);  

  return{
    navigate,
    setLogged,
    counter,
    user

  }
}