import React, { useEffect, useState } from "react"; // Import React, useEffect, and useState
import logo from "../../assets/img/Ecu.png"; // Import the logo image
import { Collapse } from "react-bootstrap"; // Import Collapse component from react-bootstrap
import ChangeTheme from "../ChangeTheme/ChangeTheme"; // Import ChangeTheme component
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage"; // Import ChangeLanguage component
import translations from "../../utils/translations"; // Import translations object
import "./Navbar.css"; // Import Navbar CSS styles

// Navbar component
const Navbar = ({ lang, theme }) => {
  const [navbarOpen, setNavbarOpen] = useState(false); // State variable to track whether navbar is open

  const navItems = translations[lang].nav; // Get navigation items based on language

  // Function to toggle navbar state
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Effect to handle changes in theme and language
  useEffect(() => { }, [theme, lang]);

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark"> {/* Navbar container */}
      <img className="logo" src={logo} alt="logo" /> {/* Logo */}
      <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        {/* Navbar toggler button */}
        <span className="navbar-toggler-icon"></span>
      </button>
      <Collapse className="collapse navbar-collapse" in={navbarOpen}>
        {/* Navbar collapse component */}
        <ul className="navbar-nav">
          {/* Navbar items */}
          <li className="nav-item">
            <a href="about" className="nav-link">
              {/* Navbar link to home */}
              {navItems[0]} {/* Display home navigation text */}
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              {/* Navbar link to skills section */}
              {navItems[1]} {/* Display skills navigation text */}
            </a>
          </li>
          <li className="nav-item">
            <a href="#courses" className="nav-link">
              {/* Navbar link to courses section */}
              {navItems[2]} {/* Display courses navigation text */}
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              {/* Navbar link to projects section */}
              {navItems[3]} {/* Display projects navigation text */}
            </a>
          </li>
        </ul>
      </Collapse>
      <ChangeLanguage /> {/* Change language component */}
      <ChangeTheme /> {/* Change theme component */}
    </nav>
  );
};

export default Navbar; // Export the Navbar component
