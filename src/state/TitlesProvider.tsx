// NPM packages
import { createContext, useReducer, useContext, ReactNode } from "react";

// Project files
import titlesReducer from "state/titlesReducer";
import iTitle from "types/iTitle";

interface iContext {
  titles: iTitle[] ;
  dispatch: Function;
}
interface iProp {
  children: ReactNode;
}

const initialState: iTitle[] = [];

const TitlesContext = createContext<iContext>({
  titles: initialState,
  dispatch: () => console.warn("CourseContext used outside provider"),
});

export function TitlesProvider({ children }: iProp) {
  // Local state
  const [titles, dispatch] = useReducer(titlesReducer, []);

  return (
    <TitlesContext.Provider value={{ titles, dispatch }}>
      {children}
    </TitlesContext.Provider>
  );
}

export function useTitles() {
  return useContext(TitlesContext);
}
