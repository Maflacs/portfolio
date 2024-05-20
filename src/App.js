import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Courses from "./components/Courses";

function App() {
  return <div className="App">
    <Navbar />
    <About />
    <Skills />
    <Courses />
    <Projects />
    <Footer />
  </div>;
}

export default App;
