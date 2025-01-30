import React from "react";
import profil from "../../assets/img/profilpic3.jpg"; // Import the profile picture
import translations from "../../utils/translations"; // Import translations utility
import Container from "../Container/Container"; // Import Container component
import ReactTypingEffect from "react-typing-effect"; // Import typing effect component
import "./About.css"; // Import CSS for the About component

const About = ({ lang }) => {
  const currentLang = translations[lang].about; // Get the translation for the current language
  const greetings = lang === "hu" ? (["<h1>Hello Világ!</h1>", "<h1>Kossa Éva</h1>", "<h1>Front-end fejlesztő</h1>"]) : (["<h1>Hello World!</h1>", "<h1>Eva Kossa</h1>", "<h1>Front-end developer</h1>"]); // Determine greetings based on language

  return (
    <Container index={0}> 
      <header className="about">
          <span id="morphBlur"></span> {/* Decorative element for background blur */}
        <h1>
          <ReactTypingEffect
            text={greetings}
            speed={100}
            eraseSpeed={50}
            typingDelay={1000}
            eraseDelay={2000}
          /> {/* Typing effect for greetings */}
        </h1>
        <img className="profpic" src={profil} alt="profil kép" /> {/* Profile picture */}
        {currentLang.map((text, index) => (
          <div className="text" key={index}>
            <p>{text}</p> {/* Display translated text */}
          </div>
        ))}
      </header>
    </Container>
  );
};

export default About;
