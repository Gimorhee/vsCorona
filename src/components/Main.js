import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import "moment-timezone";

import { NationalLineChart } from "./graph/NationalLineChart";
import { NationalPieChart } from "./graph/NationalPieChart";

export const Main = ({ showSubNav }) => {
  const [canadaData, setCanadaData] = useState({});
  const { Active, Confirmed, Deaths, Recovered, Date } = canadaData;

  const [graphData, setGraphData] = useState({
    lineGraph: {
      labels: [],
      datasets: [{}],
    },
    pieGraph: {
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
          label: "Rainfall",
          backgroundColor: [
            "#63b7af",
            "#0779e4",
            "#f5c3bc",
            "#ede59a",
            "#ee4540",
            "#a278b5",
          ],
          hoverBackgroundColor: [
            "#347474",
            "#3282b8",
            "#e89da2",
            "#d5c455",
            "#801336",
            "#f6c3e5",
          ],
          data: [650, 59, 80, 81, 56, 70],
        },
      ],
    },
  });
  const { lineGraph, pieGraph } = graphData;

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

    await setGraphData({
      ...graphData,
      lineGraph: {
        labels: getCurrentTimeset(timeSet),
        datasets: [
          {
            label: "Total Confirmed #",
            fill: false,
            lineTension: 0,
            backgroundColor: "#0779e4",
            borderColor: "#0779e4",
            borderWidth: 4,
            data: dataSet,
          },
        ],
      },
    });
  };

  // GETTTING DATA FOR PIE GRAPH
  const getCurrentProvinceData = async () => {
    try {
      let url =
        "https://api.covid19api.com/dayone/country/canada/status/confirmed/live";

      const res = await axios.get(url);
      const numOfProvince = 13;

      for (let i = 1; i <= numOfProvince; i++) {
        const provinceName = res.data[res.data.length - i].Province;
        const confirmedNumber = res.data[res.data.length - i].Cases;

        switch (provinceName) {
          case "Alberta":
            pieGraph.datasets[0].data[0] = confirmedNumber;
            break;

          case "British Columbia":
            pieGraph.datasets[0].data[1] = confirmedNumber;
            break;

          case "Saskatchewan":
            pieGraph.datasets[0].data[2] = confirmedNumber;
            break;

          case "Manitoba":
            pieGraph.datasets[0].data[3] = confirmedNumber;
            break;

          case "Ontario":
            pieGraph.datasets[0].data[4] = confirmedNumber;
            break;

          case "Quebec":
            pieGraph.datasets[0].data[5] = confirmedNumber;
            break;
          default:
            console.log("Something went wrong!");
            break;
        }
      }
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
          <p>
            vsCorona is built with 'Coronavirus COVID19 API' provided by
            Postman.
          </p>
          <span>
            Last Update:{" "}
            <Moment format="YYYY-MM-DD @HH:mm" add={{ days: 1 }}>
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
              <h4>Daily National Confirmed # Update</h4>
            </div>
            <div className="graphContainer">
              <NationalLineChart lineGraph={lineGraph} />
            </div>
          </div>

          <div className="barGraph">
            <div className="header">
              <h4>Provicial Confirmed # Update</h4>
            </div>
            <div className="graphContainer">
              <NationalPieChart pieGraph={pieGraph} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
