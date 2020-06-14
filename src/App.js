import React, { useState } from "react";
import { Main } from "./components/Main";
import { Korea } from "./components/Korea";
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
          <Route
            path="/korea"
            render={(props) => <Korea {...props} showSubNav={subNav} />}
          ></Route>
          <Route
            path="/world"
            render={(props) => <World {...props} showSubNav={subNav} />}
          ></Route>
          <Route
            path="/"
            render={(props) => <Main {...props} showSubNav={subNav} />}
          ></Route>
        </Switch>
        {subNav && <div className="darkBg"></div>}
      </div>
    </Router>
  );
}

export default App;
