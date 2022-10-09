import React from "react";
import '../App.css'
import Main from './Main'

const Navbar = () => {
  return (
    <div className="nav-menu">
      <div className="logo" >
        <strong>
         
            <img src="https://reactjs.org/logo-og.png" alt="React" height="50px" />
                &nbsp;&nbsp;&nbsp; REACT
        </strong>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#work">PORTFOLIO</a>
          </li>
          <li>
            <a href="#clients">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
