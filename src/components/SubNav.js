import React from "react";
import { Link, useLocation } from "react-router-dom";

export const SubNav = ({ showSubNav }) => {
  let pathname = useLocation().pathname;

  return (
    <div className={!showSubNav ? "subNav closeSubNav" : "subNav"}>
      <section className="dashboard">
        <h4>DASHBOARDS</h4>
        <div className="selection">
          <Link to="/" class={pathname === "/" && "currentPage"}>
            <i className="fas fa-wave-square"></i>Canada Dashboard
          </Link>
          <Link to="/korea" class={pathname === "/korea" && "currentPage"}>
            <i className="fas fa-wave-square"></i>Korea Dashboard
          </Link>
          <Link to="/world" class={pathname === "/world" && "currentPage"}>
            <i className="fas fa-wave-square"></i>World Dashboard
          </Link>
        </div>
      </section>
      <section className="relatedInfo">
        {/* NEED TO WORK LATER */}
        <h4>CORANA INFO</h4>
        <div className="selection">
          <Link to="#">
            <i className="fas fa-virus"></i>What is Corona19?
          </Link>
          <Link to="#">
            <i className="far fa-newspaper"></i>Live News
          </Link>
          <Link to="#">
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
