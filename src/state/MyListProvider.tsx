// NPM Packages
import {
  useContext,
  useEffect,
  useReducer,
  ReactNode,
  createContext,
} from "react";

// Project files
import iTitle from "types/iTitle";
import myListReducer from "./myListReducer";

interface iProp {
  children: ReactNode;
}
interface iContext {
  myList: iTitle[];
  dispatch: Function;
}

const initialState: iTitle[] = [];

// Properties
const STORAGE_KEY = "MY_NETFLIX_LIST";
const ListContext = createContext<iContext>({
  myList: initialState,
  dispatch: () => console.warn("MyListContext used outside provider"),
});

export function MyListProvider({ children }: iProp) {
  // Global state
  const [myList, dispatch] = useReducer(myListReducer, loadList(STORAGE_KEY));

  console.log("myList", myList);

  // Methods
  useEffect(() => saveList(STORAGE_KEY, myList), [myList]);

  return (
    <ListContext.Provider value={{ myList, dispatch }}>
      {children}
    </ListContext.Provider>
  );
}

export function useMyList() {
  const context = useContext(ListContext);

  return context;
}

function loadList(key: string) {
  return JSON.parse(localStorage.getItem(key)!) ?? [];
}

function saveList(key: string, list: any) {
  localStorage.setItem(key, JSON.stringify(list));
}
