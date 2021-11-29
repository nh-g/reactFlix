// NPM packages
import { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

// Project files
import "styles/styles.sass";
import { useAuth } from "state/AuthProvider";
import { getDocument } from "scripts/firebase/fireStore";
import { BoxError, Spinner } from "components/shared/FetchItems";
import UnLogged from "routes/Unlogged";
import Logged from "routes/Logged";

export default function App() {
  // Global state
  const { loggedIn, setLoggedIn, setUser } = useAuth();

  // Local state
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

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

  useEffect(() => {
    fetchUser("users");
  }, [fetchUser]);



  return (
    <div className="App">
      {status === 0 && <Spinner />}
      {status === 2 && <BoxError />}
      {status === 1 && 
        <BrowserRouter>
          <Switch>{loggedIn ? <Logged /> : <UnLogged />}</Switch>
        </BrowserRouter>
    }

    </div>
  );
}
