import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchBar.css";
import { getPokemonByName } from "../../redux/actions.js";
import Filters from "../Filters/Filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const SearchBar = () => {



  const dispatch = useDispatch();
  
  const [input, setInput] = useState("");

  const handleChange = (e) => {

    setInput(e.target.value);

    dispatch(getPokemonByName(e.target.value));

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!input) {

      return alert("Insert a valid Pokemon name");

    }

    dispatch(getPokemonByName(input));

    setInput("");
    
  };

  return (
    <div className="searchBarContainer">
      <div className="searchBar">
        <form onSubmit={handleSubmit}>
          <input type="text" required value={input} onChange={handleChange} />
          <label>
            <span style={{ transitionDelay: "0ms" }}>P</span>
            <span style={{ transitionDelay: "50ms" }}>o</span>
            <span style={{ transitionDelay: "100ms" }}>k</span>
            <span style={{ transitionDelay: "150ms" }}>e</span>
            <span style={{ transitionDelay: "200ms" }}>m</span>
            <span style={{ transitionDelay: "250ms" }}>o</span>
            <span style={{ transitionDelay: "300ms" }}>n</span>
          </label>
          
        </form>
        <FontAwesomeIcon className="lupa" onClick={handleSubmit} icon={faMagnifyingGlass} />
      </div>
      <Filters />
    </div>
  );
};

export default SearchBar;