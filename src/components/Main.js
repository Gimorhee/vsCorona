import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import { Intro } from "./Intro/Intro";
import { Graph } from "./Graph/Graph";

export const Main = ({ showSubNav }) => {
  const [canadaData, setCanadaData] = useState({});
  const { Active, Confirmed, Deaths, Recovered, Date } = canadaData;

  // GETTING CURRENT DATA
  const getCurrentData = async () => {
    const url = "https://api.covid19api.com/total/dayone/country/canada";

    try {
      const res = await axios.get(url);

      setCanadaData(res.data[res.data.length - 1]);
    } catch (error) {
      console.log(error);
    }
  };

  // THOUSAND SEPARATOR
  const printNumberwithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    getCurrentData();
  }, []);

  return (
    <Fragment>
      <div className={showSubNav ? "main" : "main noSubNav"}>
        <Intro region={"National"} Date={Date} />
        <Graph region={"National"} country={"canada"} />
        <section className="status">
          <div className="active singleStatus">
            <span className="header">Active</span>
            <span className="data">
              {printNumberwithCommas(Number(Active))}
            </span>
            <span class="link">
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
            <span class="link">
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
            <span class="link">
              <a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">
                Live Dashboard by CSSE <i className="fas fa-angle-right"></i>
              </a>
            </span>
          </div>
          <div className="deaths singleStatus">
            <span className="header">Deaths</span>
            <span className="data">
              {printNumberwithCommas(Number(Deaths))}
            </span>
            <span class="link">
              <a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">
                Live Dashboard by CSSE <i className="fas fa-angle-right"></i>
              </a>
            </span>
          </div>
        </section>
      </div>
    </Fragment>
  );
};
