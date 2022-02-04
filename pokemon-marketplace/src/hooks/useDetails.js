import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPokemon } from '../redux/actions/cartAction';

export function useDetails (pokemon) {
    const listaMovimentos = pokemon.moves.map((el) => el.move.name);
    listaMovimentos.join(', ');
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
  
    const handleClick = () => {
      dispatch(
        addPokemon({
          image: pokemon.sprites.front_default,
          name: pokemon.name,
          price: pokemon.weight,
          amount: 1,
          total: pokemon.weight,
        })
      );
      navigate('/carrinho');
    };

    return{
        navigate,
        dispatch,
        useDispatch,
        handleClick,
        listaMovimentos,
        
    }
}