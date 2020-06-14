import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Moment from "react-moment";
import "moment-timezone";

export const Main = ({ showSubNav }) => {
  const [canadaData, setCanadaData] = useState({});
  const { Active, Confirmed, Deaths, Recovered, Date } = canadaData;

  const [graphData, setGraphData] = useState({
    lineGraph: {
      labels: [],
      datasets: [{}],
    },
  });
  const { lineGraph } = graphData;

  const getCurrentData = async () => {
    const url = "https://api.covid19api.com/total/dayone/country/canada";

    try {
      const res = await axios.get(url);

      setCanadaData(res.data[res.data.length - 1]);
    } catch (error) {
      console.log(error);
    }
  };

  // CONVERING TIME TO MM/DD FORMAT
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
      lineGraph: {
        labels: getCurrentTimeset(timeSet),
        datasets: [
          {
            label: "# of Confirmed",
            fill: false,
            lineTension: 0,
            backgroundColor: "#0779e4",
            borderColor: "#0779e4",
            borderWidth: 3,
            data: dataSet,
          },
        ],
      },
    });
    console.log(timeSet);
  };

  useEffect(() => {
    getCurrentData();
    getPastDaysTimeset();
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
              <h4>Daily National Corona Update</h4>
            </div>
            <div className="graphContainer">
              <Line
                data={lineGraph}
                options={{
                  title: {
                    display: false,
                    text: "Any Title",
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "bottom",
                  },
                }}
              />
            </div>
          </div>

          <div className="barGraph"></div>
        </div>
      </div>
    </Fragment>
  );
};
