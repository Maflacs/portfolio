import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Courses from "./components/Courses";
import { LangContext } from "./context/LangContext";
import { ThemeContext } from "./context/ThemeContext";

function App() {

  const {
    state: { lang },
  } = useContext(LangContext);

  const {
    state: { darkMode },
  } = useContext(ThemeContext);

  return (
    <div className="App">
      <Navbar lang={lang} theme={darkMode}/>
      <About lang={lang} />
      <Skills lang={lang} />
      <Courses lang={lang} />
      <Projects lang={lang} />
      <Footer />
    </div>
  );
}

export default App;
