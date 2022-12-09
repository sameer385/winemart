import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Naabar() {
  return (
    <nav className="navbar">
      <div className="nav-style">
        <Link to="/">
          <img src={logo} alt="Cocktail-store" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Naabar;
