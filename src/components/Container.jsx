import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Container = ({ children, index }) => {
  const {
    state: { darkMode },
  } = useContext(ThemeContext);
  const getClassName = () => {
    if (darkMode) {
      return index % 2 === 0 ? "bggray" : "bgdark";
    } else {
      return index % 2 === 0 ? "bgblue" : "bglight";
    }
  };

  return <div className={getClassName()}>{children}</div>;
};

export default Container;
