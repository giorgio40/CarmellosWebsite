import React from "react";
import carms from "../images/carmslogo.jpg";
import { Link } from "react-router-dom";
import "../CSS/Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <img src={carms} className="carmslogo" alt="logo"></img>
      <h2 className="H2">
        Carmello's Ristorante & Wine Bar <br />
        Of Charlottesville
      </h2>
      <ul className="nav-links">
        <Link className="Link" to="/">
          <li className="li">Home</li>
        </Link>
        <Link className="Link" to="/reservations">
          <li className="li">Reservations</li>
        </Link>
        <Link to="/dinnermenu" className="Link">
          <li className="li">Dinner Menu</li>
        </Link>
        <Link to="/winelist" className="Link">
          <li className="li">WineList</li>
        </Link>
        <Link to="/about" className="Link">
          <li className="li">About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
