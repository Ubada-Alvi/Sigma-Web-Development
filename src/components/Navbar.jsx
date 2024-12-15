import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./src/assets/Group.png" alt="" />
        <h1 className="txt">BEGAWN</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">About Us</a>
        </li>
        <li>
          <a href="#about">Our Services</a>
        </li>
        <li>
          <a href="#services">Case Studies</a>
        </li>
        <li>
          <a href="#contact">Carriers</a>
        </li>
        <li>
          <a href="#contact">FAQ</a>
        </li>
      </ul>
      <button className="btn">Contact Us</button>
    </nav>
  );
};

export default Navbar;
