import React, { useContext } from "react";
import Container from "./Container";
import LangContext from "../context/LangContext";
import translations from "../translations";

const Projects = () => {
  
  const { state } = useContext(LangContext);
  const currentLang = translations[state.lang].titles;

  return (
    <Container index={2}>
      <div id="projects">
        <h2>{currentLang[3]}</h2>
      </div>
    </Container>
  );
};

export default Projects;
