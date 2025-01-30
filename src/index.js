import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { LangProvider } from "./context/LangContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LangProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </LangProvider>
);
