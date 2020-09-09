import React, { useState, useLayoutEffect, useEffect } from "react";
import { Main } from "./components/Main";
import { Korea } from "./components/Korea";
import { World } from "./components/World";
import { Corona } from "./components/Corona";
import { LiveNews } from "./components/LiveNews";
import { RelatedSites } from "./components/RelatedSites";
import { Nav } from "./components/Nav";
import { SubNav } from "./components/SubNav";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [subNav, setSubNav] = useState(width > 1000 ? true : false);

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
            render={(props) => (
              <Korea {...props} showSubNav={subNav} closeSubNav={closeSubNav} />
            )}
          ></Route>
          <Route
            path="/world"
            render={(props) => (
              <World {...props} showSubNav={subNav} closeSubNav={closeSubNav} />
            )}
          ></Route>
          <Route
            path="/corona"
            render={(props) => (
              <Corona
                {...props}
                showSubNav={subNav}
                closeSubNav={closeSubNav}
              />
            )}
          ></Route>
          <Route
            path="/live-news"
            render={(props) => (
              <LiveNews
                {...props}
                showSubNav={subNav}
                closeSubNav={closeSubNav}
              />
            )}
          ></Route>
          <Route
            path="/related-sites"
            render={(props) => (
              <RelatedSites
                {...props}
                showSubNav={subNav}
                closeSubNav={closeSubNav}
              />
            )}
          ></Route>
          <Route
            path="/"
            render={(props) => (
              <Main {...props} showSubNav={subNav} closeSubNav={closeSubNav} />
            )}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
