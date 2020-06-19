import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { NationalLineChart } from "./NationalLineChart";
import { NationalBarChart } from "./NationalBarChart";

export const Graph = ({ country, region, days }) => {
  const [lineGraph, setLineGraph] = useState({
    labels: [],
    datasets: [{}],
  });

  const [barGraph, setBarGraph] = useState({
    labels: [],
    datasets: [{}],
  });

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
    const url = `https://api.covid19api.com/total/dayone/country/${country}`;

    try {
      const res = await axios.get(url);

      for (let i = days; i > 0; i--) {
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
      let url = `https://api.covid19api.com/dayone/country/${country}/status/confirmed/live`;

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
    getPastDaysTimeset();
    getCurrentProvinceData();
  }, []);

  return (
    <Fragment>
      <section className="graphs">
        <div className="lineGraph">
          <div className="header">
            <h4>{region} Daily Confirmed Chart</h4>
            <a href="#table1">
              <i className="fas fa-scroll"></i>
            </a>
          </div>
          <div className="graphContainer">
            <NationalLineChart lineGraph={lineGraph} />
          </div>
        </div>

        <div className="barGraph">
          <div className="header">
            <h4>Provicial Total Confirmed Chart</h4>
            <a href="#table2">
              <i className="fas fa-scroll"></i>
            </a>
          </div>
          <div className="graphContainer">
            <NationalBarChart barGraph={barGraph} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
