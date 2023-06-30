import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  
  return (
    <div className="searchBarContainer">
      <div className="searchBar">
        <input type="text" required />
        <label>
          <span style={{ transitionDelay: "0ms" }}>P</span>
          <span style={{ transitionDelay: "50ms" }}>o</span>
          <span style={{ transitionDelay: "100ms" }}>k</span>
          <span style={{ transitionDelay: "150ms" }}>e</span>
          <span style={{ transitionDelay: "200ms" }}>m</span>
          <span style={{ transitionDelay: "250ms" }}>o</span>
          <span style={{ transitionDelay: "300ms" }}>n</span>
        </label>
      </div>
      <p>Filtros</p>
    </div>
  );
};

export default SearchBar;
