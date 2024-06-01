import React, { useEffect, useState } from "react";
import logo from "../img/Ecu.png";
import { Collapse } from "react-bootstrap";
import ChangeTheme from "./ChangeTheme";
import ChangeLanguage from "./ChangeLanguage";
import translations from "../translations";

const Navbar = ({lang, theme}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navItems = translations[lang].nav;

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {}, [theme, lang]);

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <img className="logo" src={logo} alt="logo" />
      <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <Collapse className="collapse navbar-collapse" in={navbarOpen}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              {navItems[0]}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              {navItems[1]}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#courses">
              {navItems[2]}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              {navItems[3]}
            </a>
          </li>
        </ul>
      </Collapse>
      <ChangeLanguage />
      <ChangeTheme />
    </nav>
  );
};

export default Navbar;
