import React from "react";
import Container from "./Container";
import translations from "../translations";
import clicker from "../img/projects/magic-school.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = ({lang}) => {

  const currentLang = translations[lang].titles;

  return (
    <Container index={3}>
      <h2>{currentLang[3]}</h2>
      <div id="projects">
        <div className="projectCard">
          <div>
            <h3>Magic clicker (react):</h3>
            <a href="https://maflacs.github.io/clicker/">
              <img className="projectImg" src={clicker} alt="Magic clicker" />
            </a>
          </div>
          <div className="link">
            <a href="https://github.com/Maflacs/clicker">
              <FontAwesomeIcon icon={faGithub} name={"GitHub"} />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
