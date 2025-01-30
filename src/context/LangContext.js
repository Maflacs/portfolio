import { createContext, useReducer } from "react"; // Import createContext and useReducer hooks from React

// Create a new context for language management
export const LangContext = createContext();

// Define the initial state for the language
const INITIAL_STATE = { lang: "hu" };

// Define the language reducer function to update the language state
const langReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      // Toggle between "hu" (Hungarian) and "en" (English) languages
      return { lang: state.lang === "hu" ? "en" : "hu" };

    default:
      return state;
  }
};

// Create a provider component to wrap the application and provide the language state
export const LangProvider = ({ children }) => {
  // Use the useReducer hook to manage state with the langReducer function and INITIAL_STATE
  const [state, dispatch] = useReducer(langReducer, INITIAL_STATE);
  
  // Provide the state and dispatch function to child components via context
  return (
    <LangContext.Provider value={{ state, dispatch }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContext; // Export the LangContext
