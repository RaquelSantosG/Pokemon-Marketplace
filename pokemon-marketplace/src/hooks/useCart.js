import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletePokemon, resetPokemon } from '../redux/actions/cartAction';

export function useCart() {
  const [carrinhoModal, setCarrinhoModal] = useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
  const storage = useSelector((state) => state);
  const dispatch = useDispatch();

  const delPokemon = (name) => {
    dispatch(deletePokemon(name));
  };

  function handleCarrinhoModal() {
    setCarrinhoModal(!carrinhoModal);
  }

  const handleCart = () => {
    dispatch(resetPokemon());
  };

  useEffect(() => {
    if (storage.cart.list !== undefined) {
      setCarrinho(storage.cart.list);
    }

    let totais = storage.cart.list.map((pokemon) => pokemon.total);
    let total = totais.reduce((total, numero) => total + numero, 0);
    setTotal(total);
  }, [storage]);

  return {
    carrinho,
    delPokemon,
    navigate,
    handleCarrinhoModal,
    handleCart,
    carrinhoModal,
    total,
  };
}
