import React from "react";
import Card from "../Card/Card";
import './Cards.css'


const Cards = ({ pokemons }) => {

  return (
    <div className="cardsContainer">
      {pokemons.map((poke, index) => (
        <Card
          key={index}
          name={poke.name}
          img={poke.img}
          types={poke.types}
          id={poke.id}
        />
      ))}
    </div>
  );
};

export default Cards;
