import React, { Fragment } from "react";

export const WorldStatus = ({ statusData }) => {
  // THOUSAND SEPARATOR
  const printNumberwithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const {
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  } = statusData;

  return (
    <Fragment>
      <section className="worldStatus">
        <div className="confirmed singleStatus globalStatus">
          <span className="header">Confirmed</span>
          <span className="data">
            {printNumberwithCommas(Number(TotalConfirmed))}{" "}
            <b>(+ {printNumberwithCommas(Number(NewConfirmed))})</b>
          </span>
          <span className="link">
            <a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">
              Live Dashboard by CSSE <i className="fas fa-angle-right"></i>
            </a>
          </span>
        </div>
        <div className="recovered singleStatus globalStatus">
          <span className="header">Recovered</span>
          <span className="data">
            {printNumberwithCommas(Number(TotalRecovered))}{" "}
            <b>(+ {printNumberwithCommas(Number(NewRecovered))})</b>
          </span>
          <span className="link">
            <a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">
              Live Dashboard by CSSE <i className="fas fa-angle-right"></i>
            </a>
          </span>
        </div>
        <div className="deaths singleStatus globalStatus">
          <span className="header">Deaths</span>
          <span className="data">
            {printNumberwithCommas(Number(TotalDeaths))}{" "}
            <b>(+ {printNumberwithCommas(Number(NewDeaths))})</b>
          </span>
          <span className="link">
            <a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">
              Live Dashboard by CSSE <i className="fas fa-angle-right"></i>
            </a>
          </span>
        </div>
      </section>
    </Fragment>
  );
};
