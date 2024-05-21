import React, { useContext } from "react";
import profil from "../img/profilpic.jpeg";
import LangContext from "../context/LangContext";
import translations from "../translations";

const About = () => {
  const { state } = useContext(LangContext);
  const currentLang = translations[state.lang].about;
  return (
    <div className="mainContainer" id="about">
      <div className="cart">
        <img className="profpic" src={profil} alt="profil kép" />
        {currentLang.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
      </div>
    </div>
  );
};

export default About;
