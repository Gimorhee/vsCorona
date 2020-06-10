import React from "react";
import { Link } from "react-router-dom";

export const SubNav = ({ showSubNav }) => {
  return (
    <div className={!showSubNav ? "subNav closeSubNav" : "subNav"}>
      <section className="dashboard">
        <h4>DASHBOARDS</h4>
        <div className="selection">
          <Link to="/">Canada Dashboard</Link>
          <Link to="/korea">Korea Dashboard</Link>
          <Link to="/world">World Dashboard</Link>
        </div>
      </section>
    </div>
  );
};

// {showSubNav ? "subNav closeSubNav" : "subNav"}
// {showSubNav ? "dontShow dashboard" : "dashboard"}
