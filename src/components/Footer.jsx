import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "../functions/Icon.js";
import hu from "../img/flaghu.svg";
import en from "../img/flagen.svg";

import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faEnvelopeSolid } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footericons">
        <a href="https://www.facebook.com/profile.php?id=100092564897640">
          <Icon icon={faFacebook} name={"Facebook"} />
        </a>
        <a href="https://github.com/Maflacs">
          <FontAwesomeIcon icon={faGithub} name={"GitHub"} />
        </a>
        <a href="https://www.linkedin.com/in/%C3%A9va-kossa/">
          <FontAwesomeIcon icon={faLinkedin} name={"Linkedin"} />
        </a>
      </div>
      <div className="mail">
        <p>
          <a href="mailto:kossa.eva@gmail.com">
            <FontAwesomeIcon icon={faEnvelopeSolid} name={"Mail"} />
          </a>
          kossa.eva@gmail.com
        </p>
      </div>
      <div className="cv">
        <p>CV:</p>
        <a
          className="cv"
          href="https://drive.google.com/file/d/1JEKt5he0rPutdQD1V93BaTVActgoHFu0/view?usp=sharing"
          download="cvhu.pdf"
        >
          <img className="flag" src={hu} alt="magyar" />
        </a>
        <a
          className="cv"
          href="https://drive.google.com/file/d/1oKrq43qc4Xo5pOjoCbgMP1_LxbVWhWit/view?usp=sharing"
          download="cven.pdf"
        >
          <img className="flag" src={en} alt="magyar" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
