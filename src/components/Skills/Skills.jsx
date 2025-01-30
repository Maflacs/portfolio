import React from "react"; // Import React
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPython,
  faBootstrap,
  faGit,
} from "@fortawesome/free-brands-svg-icons"; // Import icons from Font Awesome
import { faDatabase } from "@fortawesome/free-solid-svg-icons"; // Import database icon from Font Awesome
import Icon from "../Icon/Icon"; // Import Icon component
import Container from "../Container/Container"; // Import Container component
import translations from "../../utils/translations"; // Import translations object
import "./Skills.css"; // Import Skills CSS styles

// Skills component
const Skills = ({ lang }) => {
  const currentLang = translations[lang]; // Get translations based on current language

  return (
    <Container index={1}> {/* Container for Skills section */}
      <main className="skills"> {/* Skills section */}
        <div className="col"> {/* Column for icons */}
          <h2>{currentLang.titles[0]}</h2> {/* Display Skills section title */}
          <div className="icons"> {/* Icon container */}
            {/* Display icons with corresponding names */}
            <Icon name="HTML" icon={faHtml5} />
            <Icon name="CSS" icon={faCss3Alt} />
            <Icon name="Javascript" icon={faJs} />
            <Icon name="React" icon={faReact} />
            <Icon name="Python" icon={faPython} />
            <Icon name="SQL" icon={faDatabase} />
            <Icon name="Bootstrap" icon={faBootstrap} />
            <Icon name="Git" icon={faGit} />
          </div>
        </div>
        <div> {/* Another column */}
          <div className="other"> {/* Other skills */}
            <div className="list"> {/* List of other skills */}
              <h3>{currentLang.titles[1]}</h3> {/* Display title for other skills */}
              {currentLang.skills.map((text, index) => ( // Map through other skills
                <p key={index}>{text}</p> // Display each skill as a paragraph
              ))}
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default Skills; // Export the Skills component
