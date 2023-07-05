import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ name, imgUrl, types, id, Types, createBD }) => {

  const typesArray = Array.isArray(types) ? types : [];

  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  return (
    <Link to={`/details/${id}`}>
      <div className="cardContainer">
        <img className="pokeImg" src={imgUrl} alt="" width="180px" />
        <div className="infoCard">
          <h3 className="pokeName">{capitalize(name)}</h3>
          <div className="types">
            {typesArray.map((t, index) => (
              <p key={index}>{capitalize(t)}</p>
            ))}
            { createBD ? <p>{Types?.map(t=>t.name)}</p> : null}
          </div>
        </div>
        <button className="card-button">More info</button>
      </div>
    </Link>
  );
};

export default Card;
