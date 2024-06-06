import { createContext, useReducer } from "react"; // Import createContext and useReducer hooks from React

// Create a new context for theme management
export const ThemeContext = createContext();

// Define the initial state for the theme (dark mode)
const INITIAL_STATE = { darkMode: true };

// Define the theme reducer function to update the theme state
const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      // Toggle between dark mode and light mode
      return { darkMode: !state.darkMode };

    default:
      return state;
  }
};

// Create a provider component to wrap the application and provide the theme state
export const ThemeProvider = ({ children }) => {
  // Use the useReducer hook to manage state with the themeReducer function and INITIAL_STATE
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
  
  // Provide the state and dispatch function to child components via context
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
