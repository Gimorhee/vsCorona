import React, { Fragment } from "react";

export const Status = ({ statusData }) => {
  // THOUSAND SEPARATOR
  const printNumberwithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const { Active, Confirmed, Recovered, Deaths } = statusData;

  return (
    <Fragment>
      <section className="status">
        <div className="active singleStatus">
          <span className="header">Active</span>
          <span className="data">{printNumberwithCommas(Number(Active))}</span>
          <span className="link">
            <a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">
              Live Dashboard by CSSE <i className="fas fa-angle-right"></i>
            </a>
          </span>
        </div>
        <div className="confirmed singleStatus">
          <span className="header">Confirmed</span>
          <span className="data">
            {printNumberwithCommas(Number(Confirmed))}
          </span>
          <span className="link">
            <a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">
              Live Dashboard by CSSE <i className="fas fa-angle-right"></i>
            </a>
          </span>
        </div>
        <div className="recovered singleStatus">
          <span className="header">Recovered</span>
          <span className="data">
            {printNumberwithCommas(Number(Recovered))}
          </span>
          <span className="link">
            <a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">
              Live Dashboard by CSSE <i className="fas fa-angle-right"></i>
            </a>
          </span>
        </div>
        <div className="deaths singleStatus">
          <span className="header">Deaths</span>
          <span className="data">{printNumberwithCommas(Number(Deaths))}</span>
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
