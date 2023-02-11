import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <img className="logo" src="/logo.png" alt="surreal estate logo" />
      <span className="navbar-heading">Surreal Estate</span>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add">Add Properties</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
