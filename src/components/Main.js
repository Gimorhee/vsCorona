import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import "moment-timezone";

import { Intro } from "./Intro.js/Intro";
import { NationalLineChart } from "./graph/NationalLineChart";
import { NationalBarChart } from "./graph/NationalBarChart";

export const Main = ({ showSubNav }) => {
  const [canadaData, setCanadaData] = useState({});
  const { Active, Confirmed, Deaths, Recovered, Date } = canadaData;

  const [lineGraph, setLineGraph] = useState({
    labels: [],
    datasets: [{}],
  });

  const [barGraph, setBarGraph] = useState({
    labels: [],
    datasets: [{}],
  });

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

  // CREATING TIME ARRAY WITH MM/DD FORMAT
  const getCurrentTimeset = (timeSet) => {
    let timeperiod = [];

    for (let i = 0; i < timeSet.length; i++) {
      const month = Number(timeSet[i].split("-")[1]);
      const day = Number(timeSet[i].split("-")[2].split("T")[0]);

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const thisMonth = months[month];

      timeperiod.push(thisMonth + " " + day);
    }

    return timeperiod;
  };

  // THOUSAND SEPARATOR
  const printNumberwithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // GETTING LAST 5 DAYS DATA FOR LINE GRAPH
  const getPastDaysTimeset = async () => {
    let timeSet = [];
    let dataSet = [];
    const url = "https://api.covid19api.com/total/dayone/country/canada";

    try {
      const res = await axios.get(url);

      for (let i = 5; i > 0; i--) {
        timeSet.push(res.data[res.data.length - i].Date);
        dataSet.push(res.data[res.data.length - i].Confirmed);
      }
    } catch (error) {
      console.log(error);
    }

    await setLineGraph({
      ...lineGraph,
      labels: getCurrentTimeset(timeSet),
      datasets: [
        {
          label: "Total Confirmed #",
          fill: false,
          lineTension: 0,
          backgroundColor: "#0779e4",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: dataSet,
        },
      ],
    });
  };

  // GETTTING DATA FOR PIE GRAPH
  const getCurrentProvinceData = async () => {
    try {
      let url =
        "https://api.covid19api.com/dayone/country/canada/status/confirmed/live";

      const res = await axios.get(url);
      const numOfProvince = 13;
      let provinceData = [];

      for (let i = 1; i <= numOfProvince; i++) {
        const provinceName = res.data[res.data.length - i].Province;
        const confirmedNumber = res.data[res.data.length - i].Cases;

        switch (provinceName) {
          case "Quebec":
            provinceData[0] = confirmedNumber;
            break;

          case "Ontario":
            provinceData[1] = confirmedNumber;
            break;

          case "Alberta":
            provinceData[2] = confirmedNumber;
            break;

          case "British Columbia":
            provinceData[3] = confirmedNumber;
            break;

          case "Saskatchewan":
            provinceData[4] = confirmedNumber;
            break;

          case "Manitoba":
            provinceData[5] = confirmedNumber;
            break;

          default:
            console.log("etc province");
            break;
        }
      }

      setBarGraph({
        ...barGraph,
        labels: [
          "Quebec",
          "Ontario",
          "Alberta",
          "British Columbia",
          "Saskatchewan",
          "Maintoba",
        ],
        datasets: [
          {
            backgroundColor: "#0779e4",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 3,
            hoverBackgroundColor: "#3282b8",
            data: provinceData,
          },
        ],
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCurrentData();
    getPastDaysTimeset();
    getCurrentProvinceData();
  }, []);

  return (
    <Fragment>
      <div className={showSubNav ? "main" : "main noSubNav"}>
        <Intro region={"National"} Date={Date} />
        <section className="graphs">
          <div className="lineGraph">
            <div className="header">
              <h4>National Daily Confirmed Chart</h4>
            </div>
            <div className="graphContainer">
              <NationalLineChart lineGraph={lineGraph} />
            </div>
          </div>

          <div className="barGraph">
            <div className="header">
              <h4>Provicial Total Confirmed Chart</h4>
            </div>
            <div className="graphContainer">
              <NationalBarChart barGraph={barGraph} />
            </div>
          </div>
        </section>
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
