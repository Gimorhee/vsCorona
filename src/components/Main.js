import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import "moment-timezone";

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
          case "Alberta":
            provinceData[0] = confirmedNumber;
            break;

          case "British Columbia":
            provinceData[1] = confirmedNumber;
            break;

          case "Saskatchewan":
            provinceData[2] = confirmedNumber;
            break;

          case "Manitoba":
            provinceData[3] = confirmedNumber;
            break;

          case "Ontario":
            provinceData[4] = confirmedNumber;
            break;

          case "Quebec":
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
          "Alberta",
          "British Columbia",
          "Saskatchewan",
          "Maintoba",
          "Ontario",
          "Quebec",
        ],
        datasets: [
          {
            backgroundColor: [
              "#63b7af",
              "#ee4540",
              "#f5c3bc",
              "#ede59a",
              "#0779e4",
              "#a278b5",
            ],
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 3,
            hoverBackgroundColor: [
              "#347474",
              "#801336",
              "#e89da2",
              "#d5c455",
              "#3282b8",
              "#f6c3e5",
            ],
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
        <div className="intro">
          <h1>National Dashboard</h1>
          <p>vsCorona is built with 'COVID19 API' by Postman.</p>
          <span>
            Last Update:{" "}
            <Moment format="YYYY-MM-DD" add={{ days: 1 }}>
              {Date}
            </Moment>
          </span>
          <span className="subIntro">
            * There may be a slight difference in the following data.
          </span>
        </div>
        <div className="graphs">
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
        </div>
      </div>
    </Fragment>
  );
};
