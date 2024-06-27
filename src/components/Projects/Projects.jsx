import React from "react"; // Import React
import Container from "../Container/Container"; // Import Container component
import translations from "../../utils/translations"; // Import translations object
import clicker from "../../assets/img/projects/magic-school.png"; // Import image for Hungarian version
import clickerEn from "../../assets/img/projects/magic-school-en.png"; // Import image for English version
import learn from "../../assets/img/projects/playful-learn.png";
import learnEn from "../../assets/img/projects/playful-learn-en.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon component
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Import GitHub icon
import "./Projects.css"; // Import Projects CSS styles

// Projects component
const Projects = ({ lang }) => {
  const currentLang = translations[lang].titles; // Get titles based on current language

  return (
    <Container index={3}> {/* Container for Projects section */}
      <div className="projects"> {/* Projects section */}
        <h2>{currentLang[3]}</h2> {/* Display Projects section title */}
        <div className="projects-container"> {/* Projects container */}
          <div className="projectCard"> {/* Project card */}
            <div>
              {/* Display project name based on language */}
              {lang === "hu" ? (
                <h3>Mágikus klikker (react)</h3>
              ) : (
                <h3>Magic clicker (react):</h3>
              )}
              <a href="https://maflacs.github.io/clicker/" target="_blank" rel="noopener noreferrer">
                {/* Link to project */}
                {/* Display project image based on language */}
                {lang === "hu" ? (
                  <img
                    className="projectImg"
                    src={clicker}
                    alt="Varázslóiskola"
                  />
                ) : (
                  <img
                    className="projectImg"
                    src={clickerEn}
                    alt="Magic School"
                  />
                )}
              </a>
            </div>
            <div className="link"> {/* Project link */}
              <a href="https://github.com/Maflacs/clicker" target="_blank" rel="noopener noreferrer">
                {/* GitHub link */}
                <FontAwesomeIcon icon={faGithub} name={"GitHub"} />
              </a>
            </div>
          </div>
          <div className="projectCard"> {/* Project card */}
            <div>
              {/* Display project name based on language */}
              {lang === "hu" ? (
                <h3>Játékos tanulás (react)</h3>
              ) : (
                <h3>Playful learning (react):</h3>
              )}
              <a href="https://maflacs.github.io/playful-math/" target="_blank" rel="noopener noreferrer">
                {/* Link to project */}
                {/* Display project image based on language */}
                {lang === "hu" ? (
                  <img
                    className="projectImg"
                    src={learn}
                    alt="Játékos tanulás"
                  />
                ) : (
                  <img
                    className="projectImg"
                    src={learnEn}
                    alt="Playful learning"
                  />
                )}
              </a>
            </div>
            <div className="link"> {/* Project link */}
              <a href="https://github.com/Maflacs/playful-math" target="_blank" rel="noopener noreferrer">
                {/* GitHub link */}
                <FontAwesomeIcon icon={faGithub} name={"GitHub"} />
              </a>
            </div>
        </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
