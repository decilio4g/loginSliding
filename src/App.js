import React from "react";
import { createBrowserHistory } from "history";

import { Router } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Routes from "./routes/index";

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
