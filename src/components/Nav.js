import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav/Nav.css";

export const Nav = ({ closeSubNav }) => {
  return (
    <div className="nav">
      <section className="navLeft">
        <button className="toSubNav">
          <i className="fas fa-bars" onClick={() => closeSubNav()}></i>
        </button>
        <div>
          <Link to="/" className="logo">
            vsCorona
          </Link>
        </div>
      </section>
      <section className="navRight">
        <button type="button" className="refresh">
          {/* <i className="fas fa-sync"></i> */}
        </button>
        {/* ADD MORE LATER */}
      </section>
    </div>
  );
};
// https://www.google.ca/search?sxsrf=ALeKk03irIh6ah8V8TjmDTxjhQGP7SrYjQ%3A1591845806550&ei=rqPhXv6AIdDI0PEPndqgiAc&q=canada+current+covid+stats&oq=canada+current+covid+stats&gs_lcp=CgZwc3ktYWIQAzoECCMQJzoCCAA6BwgAEEYQ_wE6BwgAEBQQhwI6BwgjEOoCECc6BwgAEIMBEEM6BwgAEEMQiwM6CQgAEAoQQxCLAzoICAAQsQMQiwM6BQgAEIsDOggIABCxAxCRAjoFCAAQkQI6BQgAELEDOgoIABCxAxAUEIcCOgoIABCDARAUEIcCOgUIABCDAToICAAQgwEQkQI6BAgAEEM6BwgAELEDEEM6BQgAEMsBUJK0F1iw2Rdg4tkXaAZwAHgAgAGLAYgBvRKSAQQzNC4xmAEAoAEBqgEHZ3dzLXdperABCrgBAg&sclient=psy-ab&ved=0ahUKEwj-j9je5_jpAhVQJDQIHR0tCHEQ4dUDCAw&uact=5
