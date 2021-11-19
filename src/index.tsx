import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from "state/AuthProvider";
import { TitlesProvider } from "state/TitlesProvider";
import {MyListProvider} from "state/MyListProvider"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <TitlesProvider>
        <MyListProvider>
          <App />
        </MyListProvider>
      </TitlesProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
