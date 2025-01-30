import React, { useContext } from "react"; // Import necessary React hooks
import { ThemeContext } from "..//../context/ThemeContext"; // Import the theme context
import sun from "../../assets/img/sun.png"; // Import sun icon
import moon from "../../assets/img/moon.png"; // Import moon icon

const ChangeTheme = () => {
  const theme = useContext(ThemeContext); // Access the theme state and dispatch function from the context

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" }); // Dispatch a "TOGGLE" action to switch themes
  };

  return (
    <div className="toggle">
      <img src={sun} alt="sun" className="sun icon" /> {/* Display sun icon */}
      <img src={moon} alt="moon" className="moon icon" /> {/* Display moon icon */}
      <div
        className="button"
        onClick={handleClick} // Handle click event to toggle theme
        style={{ left: theme.state.darkMode ? 0 : 25 }} // Position the button based on the current theme
      ></div>
    </div>
  );
};

export default ChangeTheme;
