import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByType, getTypes, orderByAttack, orderByName } from "../../redux/actions";
import "./Filters.css";

const Filters = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.types);

  const handlerFilterByType = (e) => {
    const { value } = e.target;
    dispatch(filterByType(value));
  };

  const handleOrderByName = (e) => {
    dispatch(orderByName(e.target.value));
  };
  
  const handleOrderByAttack = (e) => {
    dispatch(orderByAttack(e.target.value));
  };

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div>
      <div className="selectContainer">
        <select
          className="selectOp"
          name="filterByType"
          onChange={handlerFilterByType}
        >
          <option value="allTypes">All types</option>
          {allTypes.map((t, index) => (
            <option key={index} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
        <select
          className="selectOp"
          name="filterByOrigin"
        >
          <option value="all">All Pokemons</option>
          <option value="pokemonsApi">Originals Pokemons</option>
          <option value="pokemonsDB">Created Pokemons</option>
        </select>
        <select
          className="selectOp"
          name="orderByName"
          onChange={handleOrderByName}
        >
          <option value="A-Z">A - Z</option>
          <option value="Z-A">Z - A</option>
        </select>
        <select
          className="selectOp"
          name="orderByAttack"
          onChange={handleOrderByAttack}
        >
          <option value="highestAttack">Highest Attack</option>
          <option value="lowestAttack">Lowest Attack</option>
        </select>
      </div>
      <div></div>
    </div>
  );
};

export default Filters;
