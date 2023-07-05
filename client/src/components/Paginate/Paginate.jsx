import React from "react";
import "./Paginate.css";
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Paginate = ({ allPokemons, paginate, pokemonsXPage, currentPage }) => {
  const pagesNumber = [];
  const totalPages = Math.ceil(allPokemons / pokemonsXPage);

  for (let i = 0; i < totalPages; i++) {
    pagesNumber.push(i + 1);
  }

  return (
    <div className="paginationContainer">
      <button className="btnsBN" onClick={() => currentPage > 1 && paginate(currentPage - 1)}>
        <FontAwesomeIcon className="" icon={faCircleChevronLeft} />
      </button>
      {pagesNumber &&
        pagesNumber.map((num) => (
          <div key={num}>
            <button
              className={`btnBN ${num === currentPage ? 'selectedPage' : ''}`}
              onClick={() => paginate(num)}
            >
              {num}
            </button>
          </div>
        ))}
      <button
        className="btnsBN"
        onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
      >
        <FontAwesomeIcon icon={faCircleChevronRight} />
      </button>
    </div>
  );
};

export default Paginate;