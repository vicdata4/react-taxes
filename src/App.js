import React, { createContext, useState, useContext } from "react";
import Login from './views/Login';
import Taxes from './views/Taxes';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/taxes">
            <Taxes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
