import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ name, icon }) => {
  const getIconColor = (name) => {
    switch (name) {
      case "HTML":
        return "#e34c26";
      case "CSS":
        return "#264de4";
      case "Javascript":
        return "#f0db4f";
      case "React":
        return "#61dafb";
      case "Python":
        return "#3776ab";
      case "SQL":
        return "#008bb9";
      case "Bootstrap":
        return "#7952b3";
      case "Git":
        return "#f05033";
      default:
        return "orange";
    }
  };
  return (
    <div>
      <FontAwesomeIcon icon={icon} style={{ color: getIconColor(name) }} />
    </div>
  );
};

export default Icon;
