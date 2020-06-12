import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { VictoryChart, VictoryLine } from "victory";

export const Main = ({ showSubNav }) => {
  const [canadaData, setCanadaData] = useState({});

  const { Active, Confirmed, Deaths, Recovered, Date } = canadaData;

  const getData = () => {
    let url = "https://api.covid19api.com/total/dayone/country/canada";
    axios.get(url).then((res) => setCanadaData(res.data[res.data.length - 1]));
  };

  const data1 = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 },
  ];

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <Fragment>
      <div className={showSubNav ? "main" : "main noSubNav"}>
        <div className="intro">
          <h1>National Dashboard</h1>
          <p>
            vsCorona is built with 'Coronavirus COVID19 API' provided by
            Postman.
          </p>
          <span>Last Update: {Date}</span>
        </div>
        <div className="graphs">
          <div className="lineGraph">
            <div className="header">
              <h4>Daily National Corona Update</h4>
            </div>
            <div className="graphContainer">
              <VictoryChart>
                <VictoryLine
                  style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc" },
                  }}
                  data={data1}
                />
              </VictoryChart>
            </div>
          </div>

          <div className="barGraph"></div>
        </div>
      </div>
    </Fragment>
  );
};
