import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ name, img, types, id }) => {
  const typesArray = Array.isArray(types) ? types : [];
  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
  return (
    <Link to={`/details/${id}`}>
      <div className="cardContainer">
        <img className="pokeImg" src={img} alt="" width="180px" />
        <div className="infoCard">
          <h3 className="pokeName">{capitalize(name)}</h3>
          <div className="types">
            {typesArray.map((t, index) => (
              <p key={index}>{capitalize(t)}</p>
            ))}
          </div>
        </div>
        <button className="card-button">More info</button>
      </div>
    </Link>
  );
};

export default Card;
