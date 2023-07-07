import React, { useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css';
import Cards from '../Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons, setPage } from '../../redux/actions';
import Paginate from '../Paginate/Paginate.jsx';

const Home = () => {
  
  const dispatch = useDispatch();
  const allPokemons = useSelector(state => state.pokemons);
  const currentPage = useSelector(state => state.currentPage);


  const pokemonsXPage = 12;



  const paginate = (pageNum) => {
    dispatch(setPage(pageNum));
  };

  const iLastPokemon = currentPage * pokemonsXPage;
  const iFirstPokemon = iLastPokemon - pokemonsXPage;
  const currentPokemon = allPokemons.slice(iFirstPokemon, iLastPokemon);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <div className='homeContainer'>
      <SearchBar />
      <Paginate
        paginate={paginate}
        allPokemons={allPokemons.length}
        pokemonsXPage={pokemonsXPage}
        currentPage={currentPage}
      />
      <Cards pokemons={currentPokemon} />
      <Paginate
        paginate={paginate}
        allPokemons={allPokemons.length}
        pokemonsXPage={pokemonsXPage}
        currentPage={currentPage}
      />
      <div className='altura'></div>
    </div>
  );
};

export default Home;