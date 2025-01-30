import React, { useContext } from "react"; // Import necessary React hooks
import { LangContext } from "../..//context/LangContext"; // Import the language context

const ChangeLanguage = () => {
  const { state, dispatch } = useContext(LangContext); // Access the language state and dispatch function from the context

  const handleClick = () => {
    dispatch({ type: "TOGGLE" }); // Dispatch a "TOGGLE" action to switch languages
  };

  return (
    <div className="toggle lang">
      <p className="en">en</p> {/* Display "en" for English */}
      <p className="hu">hu</p> {/* Display "hu" for Hungarian */}
      <div
        className="button"
        onClick={handleClick} // Handle click event to toggle language
        style={{ left: state.lang === "hu" ? 0 : 25 }} // Position the button based on the current language
      ></div>
    </div>
  );
};

export default ChangeLanguage;
