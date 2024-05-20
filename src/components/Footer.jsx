import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "../functions/Icon.js";
import {
    faFacebook,
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope as faEnvelopeSolid } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.facebook.com/profile.php?id=100092564897640">
        <Icon icon={faFacebook} name={"Facebook"} />
      </a>
      <a href="https://github.com/Maflacs">
        <FontAwesomeIcon icon={faGithub} name={"GitHub"} />
      </a>
      <a href="https://www.linkedin.com/in/%C3%A9va-kossa/">
        <FontAwesomeIcon icon={faLinkedin} name={"Linkedin"}/>
      </a>
      <p>
        <a href="mailto:kossa.eva@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelopeSolid}
            name={"Mail"}
          />
        </a>
      </p>
    </div>
  );
};

export default Footer;
