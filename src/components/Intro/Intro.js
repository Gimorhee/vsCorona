import React, { Fragment } from "react";
import Moment from "react-moment";
import "moment-timezone";

export const Intro = ({ region, Date }) => {
  return (
    <Fragment>
      <section className="intro">
        <h1>{region} Dashboard</h1>
        <p>vsCorona is built with 'CORONAVIRUS COVID19 API' - Postman</p>
        <span>
          Last Update:{" "}
          <Moment
            format="YYYY-MM-DD"
            add={{ days: window.location.pathname === "/world" ? 0 : 1 }}
          >
            {Date}
          </Moment>
        </span>
        <span className="subIntro">
          * Please note that the following data might not be 100% accurate and
          up-to-date as this data is getting called from another source.
        </span>
      </section>
    </Fragment>
  );
};
