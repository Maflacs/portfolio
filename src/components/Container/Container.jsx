import React, { useContext } from "react"; // Import necessary React hooks
import { ThemeContext } from "../../context/ThemeContext"; // Import the theme context
import "./Container.css"; // Import the CSS for this component

const Container = ({ children, index }) => {
  // Destructure `children` and `index` from props
  const {
    state: { darkMode },
  } = useContext(ThemeContext); // Access the theme state from the context

  // Function to determine the class name based on theme and index
  const getClassName = () => {
    if (darkMode) {
      return index % 2 === 0 ? "bggray" : "bgdark"; // Return class names for dark mode
    } else {
      return index % 2 === 0 ? "bgblue" : "bglight"; // Return class names for light mode
    }
  };

  return <div className={getClassName()}>{children}</div>; // Apply the class name and render children
};

export default Container;
