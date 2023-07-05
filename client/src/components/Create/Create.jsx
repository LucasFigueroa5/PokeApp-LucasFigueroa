import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getTypes } from "../../redux/actions.js";
import { Link } from "react-router-dom";
import "./Create.css";

const Create = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const [error, setError] = useState({});

  const [form, setForm] = useState({
    "name": "",
    "hp": '',
    "attack": '',
    "defense": '',
    "speed": '',
    "height": '',
    "weight": '',
    "imgUrl": "",
    "types": [],
  });
  // VALIDACION--------------------------------

  const validation = (form) => {
    const errors = {};
    if (!form.name) errors.name = "*Name is required";
    if (/[[/*+$#!%&()=?¿\]{}/\-.,:@_<>]/.test(form.name)) {
      errors.name = "*No se permiten signos";
    }
    if (form.name && form.name.length > 0 && form.name.length < 3)
      errors.name = "*Name must have 3 or more letters";

    if (!form.hp) errors.hp = "*Please enter a valid number between 1 and 400";
    // if (form.hp)
    //   errors.hp = "*Numbers allowed only";
    if (!form.attack)
      errors.attack = "**Please enter a valid number between 1 and 350";
    if (!form.defense)
      errors.defense = "*Please enter a valid number between 1 and 400";
    if (!form.speed)
      errors.speed = "*Please enter a valid number between 1 and 100";
    if (!form.height)
      errors.height = "*Please enter a valid number between 1 and 150";
    if (!form.weight)
      errors.weight = "*Please enter a valid number between 1 and 300";

    return errors;
  };

  // VALIDACION---------------------------

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleDelete = (type) => {
    setForm({
      ...form,
      types: form.types.filter((types) => types !== type),
    });
  };

  const handleSelect = (e) => {
    const selected = e.target.value;
    if (form.types.length >= 2)
      return alert("Cannot choose more than two types");
    if (!form.types.includes(selected)) {
      setForm({
        ...form,
        types: [...form.types, selected],
      });
    }
  };

  const handleChange = (e) => {

    setError(
      validation({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
    let toNum = e.target.value
    if (!isNaN(e.target.value)) {
      toNum = Number(e.target.value) 
    }
    setForm({
         ...form,
         [e.target.name]: toNum,
      })

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(error).length > 0) {
      return alert("Make sure to complete all the fields");
    }
    dispatch(createPokemon(form));
    alert("Pokemon created");
  };

  return (
    <div className="createContainer">
      <section className="create-section">
        <Link to="/home">
          <div className="back-home-cont">
            <button className="back-home-butt">Back Home</button>
          </div>
        </Link>
        <form className="formContainer" onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
            className="inputCreate"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          ></input>
          {error.name && <span className="error">{error.name}</span>}
          <label>HP: </label>
          <input
            className="inputCreate"
            type="number"
            min="0"
            max="400"
            name="hp"
            value={form.hp}
            onChange={handleChange}
          ></input>
          {error.hp && <span className="error">{error.hp}</span>}
          <label>attack: </label>
          <input
            className="inputCreate"
            type="number"
            min="0"
            max="350"
            name="attack"
            value={form.attack}
            onChange={handleChange}
          ></input>
          {error.attack && <span className="error">{error.attack}</span>}
          <label>defense: </label>
          <input
            className="inputCreate"
            type="number"
            min="0"
            max="400"
            name="defense"
            value={form.defense}
            onChange={handleChange}
          ></input>
          {error.defense && <span className="error">{error.defense}</span>}
          <label>speed: </label>
          <input
            className="inputCreate"
            type="number"
            min="0"
            max="100"
            name="speed"
            value={form.speed}
            onChange={handleChange}
          ></input>
          {error.speed && <span className="error">{error.speed}</span>}
          <label>height: </label>
          <input
            className="inputCreate"
            type="number"
            min="0"
            max="150"
            name="height"
            value={form.height}
            onChange={handleChange}
          ></input>
          {error.height && <span className="error">{error.height}</span>}
          <label>weight: </label>
          <input
            className="inputCreate"
            type="number"
            min="0"
            max="300"
            name="weight"
            value={form.weight}
            onChange={handleChange}
          ></input>
          {error.weight && <span className="error">{error.weight}</span>}
          <label>image: </label>
          <input
            className="inputCreate"
            type="text"
            name="imgUrl"
            value={form.imgUrl}
            onChange={handleChange}
          ></input>
          <label>types:</label>
          <select className="select-button" name="type" onChange={handleSelect}>
            {types.map((type) => {
              return (
                <option key={type.id} value={type.name}>
                  {type.name}
                </option>
              );
            })}
          </select>
          <div className="selected">
            {form.types?.map((type) => {
              return (
                <span key={type} className="delete-type-cont">
                  {type}
                  <button
                    className="delete-type-button"
                    onClick={() => handleDelete(type)}
                  >
                    x
                  </button>
                </span>
              );
            })}
          </div>
          <button onClick={handleSubmit} type="submit" className="createpoke-button">
            Create Pokemon
          </button>
        </form>
      </section>
    </div>
  );
};

export default Create;
