import React from "react";
import "./Navbar.css";
import logo from "../../utils/images/poke.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="navContainer">
      <img src={logo} alt="pokemon" />
      <div className="btnsContainer">
        <div className="navBtnsContainer">
          <Link to="/home">
            <button className="btnNav">Home</button>
          </Link>
          <Link to="/create">
            <button className="btnNav">Create Pokemon</button>
          </Link>
        </div>
        <div className="socialContainer">
          <a href="https://www.instagram.com/lucasfiguerok/" target="blank">
            <FontAwesomeIcon className="socialIcon" icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/Luks.Figueroa.SL" target="blank">
            <FontAwesomeIcon className="socialIcon" icon={faFacebookF} />
          </a>
          <a href="https://github.com/LucasFigueroa5" target="blank">
            <FontAwesomeIcon className="socialIcon" icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/lucas-figueroa-62b6b4205/" target="blank">
          <FontAwesomeIcon className="socialIcon" icon={faLinkedinIn} />
          </a>
        </div>
        <div className="logoutBtn">
          <Link to="/">
            <button className="btnNav">Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
