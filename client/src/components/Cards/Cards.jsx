import React from "react";
import Card from "../Card/Card";
import "./Cards.css";
import { useSelector } from "react-redux";
import  Loader  from "../Loader/Loader.jsx";

const Cards = ({ pokemons }) => {
  const loader = useSelector((state) => state.loader);

  return (
    <div className="cardsContainer">
      {!loader ? (
        <Loader />
      ) : (
        pokemons.map((poke, index) => (
          <Card
            key={index}
            name={poke.name}
            imgUrl={poke.imgUrl}
            types={poke.types}
            id={poke.id}
            Types={poke.createBD ? poke.Types : null}
            createBD={poke.createBD}
          />
        ))
      )}
    </div>
  );
};

export default Cards;
