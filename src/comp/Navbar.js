import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';
import Lottie from "lottie-react";
import movingHearts from "./Animation/hearts.json";
import { HashRouter as Router } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navBarContent">
        <div className='movingHearts'>
          <Lottie animationData={movingHearts} />
        </div>
        <div>
          <h1 className="logo">Mosa & Elton</h1>
        </div>
        <div className='movingHearts'>
          <Lottie animationData={movingHearts} />
        </div>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Our Story</Link></li>
        <li><a href="https://elton-maruthulle.github.io/Momo/">OurBook</a></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
