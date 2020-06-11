import React, { useState } from "react";
import { Main } from "./components/Main";
import { World } from "./components/World";
import { Nav } from "./components/Nav";
import { SubNav } from "./components/SubNav";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  const [subNav, setSubNav] = useState(true);

  const closeSubNav = () => {
    setSubNav(!subNav);
  };

  return (
    <Router>
      <div className="app">
        <Nav closeSubNav={closeSubNav} />
        <SubNav showSubNav={subNav} />
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/world" component={World}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
