import { createContext, useState, useContext } from "react";

import iUser from "types/iUser";

const AuthContext = createContext({
  user: {
    id: "",
    username: "",
    role: "",
    avatar: "",
    DOB: "",
  },
  setLoggedIn: (status: boolean) => status,
  loggedIn: false,
  setUser: (newUser: any) => newUser,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<iUser | undefined>({
    id: "",
    username: "",
    role: "",
    avatar: "",
    DOB: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    //@ts-ignore
    <AuthContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
