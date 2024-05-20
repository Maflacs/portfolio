import React from "react";
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

const Skills = () => {
  return (
    <div className="mainContainer" id="skills">
      <div>
        <h2>Tanult skillek</h2>
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
            <h3>Egyéb jártasságaim</h3>
            <p>Microsoft Power BI</p>
            <p>Adatelemzés</p>
            <p>Adatvizualizáció</p>
            <p>Gépi tanulás</p>
            <p>Statisztika</p>
            <p>Manuális tesztelés</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
