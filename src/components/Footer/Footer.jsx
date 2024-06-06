import React from "react"; // Import React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon component from FontAwesome
import Icon from "../Icon/Icon.js"; // Import custom Icon component
import hu from "../../assets/img/flaghu.svg"; // Import Hungarian flag image
import en from "../../assets/img/flagen.svg"; // Import English flag image
import "./Footer.css"; // Import CSS for styling

// Import specific icons from FontAwesome
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faEnvelopeSolid } from "@fortawesome/free-solid-svg-icons";

// Footer component
const Footer = () => {
  return (
    <footer className="footer"> {/* Footer container */}
      <div className="footericons"> {/* Container for social media icons */}
        <a href="https://www.facebook.com/profile.php?id=100092564897640">
          <Icon icon={faFacebook} name={"Facebook"} /> {/* Custom Icon component for Facebook */}
        </a>
        <a href="https://github.com/Maflacs">
          <FontAwesomeIcon icon={faGithub} name={"GitHub"} /> {/* FontAwesomeIcon for GitHub */}
        </a>
        <a href="https://www.linkedin.com/in/%C3%A9va-kossa/">
          <FontAwesomeIcon icon={faLinkedin} name={"Linkedin"} /> {/* FontAwesomeIcon for LinkedIn */}
        </a>
      </div>
      <div className="mail"> {/* Container for email link */}
        <p>
          <a href="mailto:kossa.eva@gmail.com">
            <FontAwesomeIcon icon={faEnvelopeSolid} name={"Mail"} /> {/* FontAwesomeIcon for email */}
          </a>
          kossa.eva@gmail.com {/* Display email address */}
        </p>
      </div>
      <div className="cv"> {/* Container for CV download links */}
        <p>CV:</p>
        <a
          className="cv"
          href="https://drive.google.com/file/d/1JEKt5he0rPutdQD1V93BaTVActgoHFu0/view?usp=sharing"
          download="cvhu.pdf"
        >
          <img className="flag" src={hu} alt="magyar" /> {/* Hungarian flag image */}
        </a>
        <a
          className="cv"
          href="https://drive.google.com/file/d/1z8fcN6rqjfOJrGgzFOv_5uwXaRo4Hv1Z/view?usp=sharing"
          download="cven.pdf"
        >
          <img className="flag" src={en} alt="magyar" /> {/* English flag image */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
