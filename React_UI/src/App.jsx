import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";

import Contacts from "./pages/Contacts";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
