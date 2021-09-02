import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Stats from "./pages/Stats";
import Home from "./pages/Home";

export default function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home></Home>}></Route>
          <Route exact path="/stats" render={() => <Stats></Stats>}></Route>
          <Route
            exact
            path="/dashboard"
            render={() => <Dashboard></Dashboard>}
          ></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
