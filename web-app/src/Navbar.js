import React from "react";
import palaceImage from "./logo.png";
import { Link } from 'react-router-dom'; 



const Navbar = () => {

  return (
    <div>
      <nav className="navbar">
        <img src={palaceImage} alt="logo" className="logo" />

        <ul className="link">
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Service">Services</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
