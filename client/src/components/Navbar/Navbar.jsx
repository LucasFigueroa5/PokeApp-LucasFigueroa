import React from "react";
import "./Navbar.css";
import logo from "../../utils/images/poke.png";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navContainer">
      <img src={logo} alt="pokemon" />
      <div className="btnsContainer">
        <div className="navBtnsContainer">
          <Link to='/home'>
            <button className="btnNav">Home</button>
          </Link>
          <Link to='/create'>
            <button className="btnNav">Create Pokemon</button>
          </Link>
        </div>
        <div className="logoutBtn">
          <Link to='/'>
            <button className="btnNav">Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
