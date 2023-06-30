import React, { useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './Home.css'
import Cards from '../Cards/Cards'
import {useDispatch, useSelector} from 'react-redux' 
import { getAllPokemons } from '../../redux/actions'

const Home = () => {

  const dispatch = useDispatch();
  const allPokemons = useSelector(state => state.pokemons)

 useEffect(() => {
  dispatch(getAllPokemons())
 },[dispatch])

  return (
    <div className='homeContainer'>
      <SearchBar />
      <Cards pokemons={allPokemons}/>
    </div>
  )
}

export default Home