// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="Logo">TOURLY</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="aboutus">About Us</a>
          </li>
          <li>
            <a href="#destination">Destinattion</a>
          </li>
          <li>
            <a href="#Packages">Packages</a>
          </li>
          <li>
            <a href="#Gallery">Gallery</a>
          </li>
          <li>
            <a href="#contactus">Contact Us</a>
          </li>
        </ul>
        <button className="book-now">Book Now</button>
      </nav>
    </div>
  );
};

export default Navbar;
