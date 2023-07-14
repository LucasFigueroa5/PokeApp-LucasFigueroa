import React, { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import Paginate from "../Paginate/Paginate.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const currentPage = useSelector((state) => state.currentPage);
  const totalPokemons = useSelector((state) => state.pokemonsCopy);

  const pokemonsXPage = 12;

  const iLastPokemon = currentPage * pokemonsXPage; //12
  const iFirstPokemon = iLastPokemon - pokemonsXPage;
  const currentPokemon = allPokemons.slice(iFirstPokemon, iLastPokemon);

  useEffect(() => {

    dispatch(getAllPokemons());

  }, [dispatch]);

  return (
    <div className="homeContainer">
      <SearchBar />

      <Paginate
        allPokemons={allPokemons.length}
        pokemonsXPage={pokemonsXPage}
        currentPage={currentPage}
      />
      <h6 className="totalPokemons">{allPokemons.length} of {totalPokemons.length}</h6>
      <Cards pokemons={currentPokemon} />
      <Paginate
        allPokemons={allPokemons.length}
        pokemonsXPage={pokemonsXPage}
        currentPage={currentPage}
      />
      <div className="altura"></div>
    </div>
  );
};

export default Home;
