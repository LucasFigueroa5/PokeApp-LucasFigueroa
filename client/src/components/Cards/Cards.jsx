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
          imgUrl={poke.imgUrl}
          types={poke.types}
          id={poke.id}
          Types={poke.createBD ? poke.Types : null}
          createBD={poke.createBD}
        />
      ))}
    </div>
  );
};

export default Cards;
