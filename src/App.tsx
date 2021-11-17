//@ts-nocheck
//NPM Packages
import { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

//Local Files
import "styles/base.sass";
import { useAuth } from "state/AuthProvider";
import { getDocument } from "scripts/fireStore";
import Logged from "routes/Logged";
import Unlogged from "routes/Unlogged";
import { BoxError, Spinner } from "components/shared/FetchItems";
import Footer from "components/shared/Footer";

export default function App() {
  // Global state
  const { loggedIn, setLoggedIn, setUser } = useAuth();

  //Local state
  const [status, setStatus] = useState(0); // 0 loading, 1 ready, 2 error

  // Methods
  const fetchUser = useCallback(
    async (path) => {
      const uid = localStorage.getItem("uid");
      if (uid) {
        const user = await getDocument(path, uid);
        setUser(user);
        setLoggedIn(true);
      }
      setStatus(1);
    },
    [setUser, setLoggedIn]
  );

  useEffect(() => fetchUser("users"), [fetchUser]);
  
  return (
    <div className="App">
      {status === 0 && <Spinner />}
      {status === 2 && <BoxError />}
      {status === 1 && (
        <BrowserRouter>
          <Switch>{loggedIn ? <Logged /> : <Unlogged />}</Switch>
          <Footer/>
        </BrowserRouter>
      )}
    </div>
  );
}
