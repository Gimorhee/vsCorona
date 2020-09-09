import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Nav/Nav.css";

export const SubNav = ({ showSubNav }) => {
  let pathname = useLocation().pathname;

  return (
    <div className={!showSubNav ? "subNav closeSubNav" : "subNav"}>
      <section className="dashboard">
        <h4>DASHBOARDS</h4>
        <div className="selection">
          <Link to="/" className={pathname === "/" && "currentPage"}>
            <i className="fas fa-wave-square"></i>Canada Dashboard
          </Link>
          <Link to="/korea" className={pathname === "/korea" && "currentPage"}>
            <i className="fas fa-wave-square"></i>Korea Dashboard
          </Link>
          <Link to="/world" className={pathname === "/world" && "currentPage"}>
            <i className="fas fa-wave-square"></i>World Dashboard
          </Link>
        </div>
      </section>
      <section className="relatedInfo">
        {/* NEED TO WORK LATER */}
        <h4>CORANA INFO</h4>
        <div className="selection">
          <Link to="/corona">
            <i className="fas fa-virus"></i>What is COVID-19?
          </Link>
          <Link to="/live-news">
            <i className="far fa-newspaper"></i>COVID-19 News
          </Link>
          <Link to="/related-sites">
            <i className="fas fa-th-large"></i>Related Sites
          </Link>
        </div>
      </section>
      <section className="aboutMe">
        <span>Built by Danny Rhee</span>
        <a href="mailto:dongyunrhee@gmail.com">dongyunrhee@gmail.com</a>
      </section>
    </div>
  );
};
