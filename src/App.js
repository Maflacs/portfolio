import React, { useContext } from "react";
import { LangContext } from "./context/LangContext";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";
import AppRouter from "./routes/AppRouter";

function App() {
  // Access language state from LangContext
  const { state: { lang } } = useContext(LangContext);
  // Access dark mode state from ThemeContext
  const { state: { darkMode } } = useContext(ThemeContext);

  return (
    <div className="App">
      {/* Render the main router with language and theme props */}
      <AppRouter lang={lang} theme={darkMode}/>
    </div>
  );
}

export default App;
