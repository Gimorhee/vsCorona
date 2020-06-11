import React from "react";
import { Link } from "react-router-dom";

export const Nav = ({ closeSubNav }) => {
  return (
    <div className="nav">
      <section className="navLeft">
        <button className="toSubNav">
          <i className="fas fa-bars" onClick={closeSubNav}></i>
        </button>
        <div>
          <Link to="/" className="logo">
            vsCorona
          </Link>
        </div>
      </section>
      <section className="navRight">
        <button className="refresh">
          <i className="fas fa-sync"></i>
        </button>
        {/* ADD MORE LATER */}
      </section>
    </div>
  );
};
