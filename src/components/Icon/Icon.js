import React from "react"; // Import React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon component from FontAwesome

// Icon component
const Icon = ({ name, icon }) => {
  // Function to get the color based on the icon name
  const getIconColor = (name) => {
    switch (name) {
      case "HTML":
        return "#e34c26"; // HTML icon color
      case "CSS":
        return "#264de4"; // CSS icon color
      case "Javascript":
        return "#f0db4f"; // Javascript icon color
      case "React":
        return "#61dafb"; // React icon color
      case "Python":
        return "#3776ab"; // Python icon color
      case "SQL":
        return "#008bb9"; // SQL icon color
      case "Bootstrap":
        return "#7952b3"; // Bootstrap icon color
      case "Git":
        return "#f05033"; // Git icon color
      default:
        return "orange"; // Default icon color
    }
  };

  return (
    <div>
      <FontAwesomeIcon icon={icon} style={{ color: getIconColor(name) }} /> {/* Render the icon with the specified color */}
    </div>
  );
};

export default Icon; // Export the Icon component
