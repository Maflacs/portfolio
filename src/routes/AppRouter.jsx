import React from "react";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Courses from "../components/Courses/Courses";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";

const AppRouter = ({ lang, theme }) => {
  return (
    <div>
      {/* Render the Navbar component */}
      <Navbar lang={lang} theme={theme} />
      {/* Main sections */}
      <main>
        {/* About section */}
        <section id="about">
          <About lang={lang} />
        </section>
        {/* Skills section */}
        <section id="skills">
          <Skills lang={lang} />
        </section>
        {/* Courses section */}
        <section id="courses">
          <Courses lang={lang} />
        </section>
        {/* Projects section */}
        <section id="projects">
          <Projects lang={lang} />
        </section>
      </main>
      {/* Render the Footer component */}
      <Footer lang={lang} />
    </div>
  );
};

export default AppRouter;
