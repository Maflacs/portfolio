import React from "react";
import profil from "../img/profilpic.jpeg";

const About = () => {
  return (
    <div className="mainContainer" id="about">
      <div className="cart">
        <img className="profpic" src={profil} alt="profil kép" />
        <p>
          Egy nagyon lelkes kezdő fejlesztő vagyok, akit elsősorban a frontend
          és az adatelemzés érdekel.
        </p>
        <p>
          Közel 5 éve foglalkozom már ezekkel a területekkel, folyamatosan
          fejlesztem magam, de céges tapasztalattal még nem rendelkezem.
        </p>
        <p>Éppen ezért most állást keresek, hogy még többet tanulhassak.</p>
      </div>
    </div>
  );
};

export default About;
