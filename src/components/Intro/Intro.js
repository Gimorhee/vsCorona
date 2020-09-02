import React, { Fragment } from "react";
import Moment from "react-moment";
import "moment-timezone";

export const Intro = ({ region, Date }) => {
  return (
    <Fragment>
      <section className="intro">
        <h1>{region} Dashboard</h1>
        <p>vsCorona is built with 'COVID19 API' by Postman.</p>
        <span>
          Last Update:{" "}
          <Moment format="YYYY-MM-DD" add={{ days: 1 }}>
            {Date}
          </Moment>
        </span>
        <span className="subIntro">
          * There may be some differences in the following data as these data
          are getting called from other source.
        </span>
      </section>
    </Fragment>
  );
};
