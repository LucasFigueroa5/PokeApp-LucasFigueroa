import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './Home.css'
import Cards from '../Cards/Cards'
import {useDispatch, useSelector} from 'react-redux' 
import { getAllPokemons } from '../../redux/actions'
import Paginate from '../Paginate/Paginate.jsx'

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector(state => state.pokemons)
  
  const [currentPage, setCurrentPage] = useState(1) // Pagina donde inicio en el home, la 1
  const [pokemonsXPage,] = useState(12) // cantidad de pokemons que se renderizan en una pagina

  const paginate = (pageNum) => {
    setCurrentPage(pageNum)
  }

  const iLastPokemon = currentPage*pokemonsXPage;

  const iFirstPokemon = iLastPokemon - pokemonsXPage;

  const currentPokemon = allPokemons.slice(iFirstPokemon, iLastPokemon);


 useEffect(() => {
  dispatch(getAllPokemons())
 },[dispatch])

  return (
    <div className='homeContainer'>
      <SearchBar />
      <Paginate 
      paginate={paginate}
      allPokemons={allPokemons.length}
      pokemonsXPage={pokemonsXPage}
      currentPage={currentPage}
        />
      <Cards pokemons={currentPokemon}/>
      <Paginate paginate={paginate}
      allPokemons={allPokemons.length}
      pokemonsXPage={pokemonsXPage}
      currentPage={currentPage} />
    </div>
  )
}

export default Home