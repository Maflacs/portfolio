import React, { useState } from "react";
import logo from "../img/Ecu.png";
import cv from "../cv/cv.pdf";
import { Collapse } from "react-bootstrap";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <a className="cv" href={cv} download="https://drive.google.com/file/d/1O81NrnHCL2u0LZXSOx_2VZEJL5LbtY_H/view?usp=sharing">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Collapse className="collapse navbar-collapse" in={navbarOpen}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              Rólam
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              Jártasságaim
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#courses">
              Tanfolyamok
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Munkáim
            </a>
          </li>
        </ul>
      </Collapse>
    </nav>
  );
};

export default Navbar;
