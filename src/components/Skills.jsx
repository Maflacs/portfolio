import React, { useContext } from "react";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPython,
  faBootstrap,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Icon from "../functions/Icon.js";
import Container from "./Container.jsx";
import LangContext from "../context/LangContext.js";
import translations from "../translations.js";

const Skills = () => {

  const { state } = useContext(LangContext);
  const currentLang = translations[state.lang];

  return (
    <Container index={0}>
      <div id="skills">
        <div>
          <h2>{currentLang.titles[0]}</h2>
          <div className="icons">
            <div>
              <Icon name="HTML" icon={faHtml5} />
              <Icon name="CSS" icon={faCss3Alt} />
              <Icon name="Javascript" icon={faJs} />
            </div>
            <div>
              <Icon name="React" icon={faReact} />
              <Icon name="Python" icon={faPython} />
              <Icon name="SQL" icon={faDatabase} />
            </div>
            <div>
              <Icon name="Bootstrap" icon={faBootstrap} />
              <Icon name="Git" icon={faGit} />
            </div>
          </div>
        </div>
        <div>
          <div className="other">
            <div className="list">
              <h3>{currentLang.titles[1]}</h3>
              {currentLang.skills.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
