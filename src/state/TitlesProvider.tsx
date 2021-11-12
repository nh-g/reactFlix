//@ts-nocheck
import { createContext, useReducer, useContext } from "react";
//Project files
import titlesReducer from "state/titlesReducer";

const TitlesContext = createContext(null);

export function TitlesProvider({ children }) {
  // Local state
  const [titles, dispatchTitles] = useReducer(titlesReducer, []);

  return (
    <TitlesContext.Provider value={{ titles, dispatchTitles }}>
      {children}
    </TitlesContext.Provider>
  );
}

export function useTitles() {
  return useContext(TitlesContext);
}
