import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../views/Login";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  );
}
