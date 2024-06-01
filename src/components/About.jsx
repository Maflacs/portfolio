import React from "react";
import profil from "../img/profilpic.jpeg";
import translations from "../translations";
import Container from "./Container";
import ReactTypingEffect from "react-typing-effect";

const About = ({ lang }) => {
  const currentLang = translations[lang].about;
  const greetings = lang === "hu" ? (["<h1>Hello Világ!</h1>", "<h1>Kossa Éva</h1>", "<h1>Front-end fejlesztő</h1>"]) : (["<h1>Hello World!</h1>", "<h1>Eva Kossa</h1>", "<h1>Front-end developer</h1>"]); 
  return (
    <Container index={0}>
      <main id="about">
          <span id="morphBlur"></span>
        <h1>
          <ReactTypingEffect
            text={greetings}
            speed={100}
            eraseSpeed={50}
            typingDelay={1000}
            eraseDelay={2000}
          />
        </h1>
        <img className="profpic" src={profil} alt="profil kép" />
        {currentLang.map((text, index) => (
          <div className="text" key={index}>
            <p>{text}</p>
          </div>
        ))}
      </main>
    </Container>
  );
};

export default About;
