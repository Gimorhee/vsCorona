import React from "react";
import { Main } from "./components/Main";
import { World } from "./components/World";
import { Nav } from "./components/Nav";
import { SubNav } from "./components/SubNav";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <SubNav />
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/world" component={World}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
