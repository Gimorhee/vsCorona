import React, { Fragment } from "react";

export const LiveNews = ({ showSubNav, closeSubNav }) => {
  return (
    <Fragment>
      <div className={showSubNav ? "liveNews" : "liveNews noSubNav"}>
        <div className="news">
          <h1>GLOBAL LIVE COVID-19: Real Time Counter, World Map, News</h1>
          <div className="videoContainer">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/NMre6IAAAiU"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
        <div className="news">
          <h1>
            CBC COVID-19 UPDATE: Public health officials address Canadians..
          </h1>
          <div className="videoContainer">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/pxQL6CV3v0I"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
        <div className="news">
          <h1>KOREA YTN COVID-19 LIVE NEWS</h1>
          <div className="videoContainer">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/U_sYIKWhJvk"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
        <div className="news">
          <h1>COVID-19 UPDATE: The Latest COVID-19 news from Asia</h1>
          <div className="videoContainer">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/vWtcZ6T08NQ"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </div>
      {showSubNav && (
        <div className="darkBg" onClick={() => closeSubNav()}></div>
      )}
    </Fragment>
  );
};
