import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from "state/AuthProvider";
import { TitlesProvider } from "state/TitlesProvider";
import { UsersProvider } from 'state/UsersProvider';
import {MyListProvider} from "state/MyListProvider"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UsersProvider>
        <TitlesProvider>
          <MyListProvider>
            <App />
          </MyListProvider>
        </TitlesProvider>
      </UsersProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
