import React, { useEffect } from "react";
import { getPokemonDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./Detail.css";
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.pokemonDetail);
  
  const typesArray = Array.isArray(detail.types) ? detail.types : [];

  function capitalize(str) {
    if (typeof str === 'string' && str.length > 0) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return '';
  }

  useEffect(() => {

    dispatch(getPokemonDetail(id));

  }, [dispatch, id]);

  return (
    
    <div className="detailContainer">
      <div className="detailLeft">
        <Link to='/home'>
          <FontAwesomeIcon className="backBtn" icon={faCircleArrowLeft} />
        </Link>
        <img className="imagePokemon" src={detail.imgUrl || detail.imgUrl} alt={detail.name} width="430px" />
      </div>
      <div className="detailRight">
        <div className="detailHeader">
          <div className="idContainer">
            <h1 className="pokeId">{detail.id}</h1>
          </div>
          <div className="titleAndTypes">
            <h1 className="pokemonName">{capitalize(detail.name)}</h1>
            <div className="pokemonTypes">
              {typesArray.map((t, index) => (
                <h3 key={index}>{capitalize(t)}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="pokeDet">
          <div className="pokeDet1">
            <h3>HP: {detail.hp}</h3>
            <h3>Attack: {detail.attack}</h3>
            <h3>Defense: {detail.defense}</h3>
            <h3>Speed: {detail.speed}</h3>
            <h3>Heigth: {detail.height}</h3>
            <h3>Weight: {detail.weight} </h3>
          </div>
          <div className="pokeDet2">
            <progress value={detail.hp} max="100"></progress>
            <progress value={detail.attack} max="100"></progress>
            <progress value={detail.defense} max="100"></progress>
            <progress value={detail.speed} max="100"></progress>
            <progress value={detail.height} max="100"></progress>
            <progress value={detail.weight} max="1000"></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
