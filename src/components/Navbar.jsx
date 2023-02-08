import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <img
        className="logo"
        src="../../public/logo.png"
        alt="surreal estate logo"
      />
      <span className="navbar-heading">Surreal Estate</span>
      <ul className="navbar-links">
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add Properties</li>
      </ul>
    </div>
  );
};

export default Navbar;
