import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import { Intro } from "./Intro/Intro";
import { Graph } from "./Graph/Graph";
import { Status } from "./Status/Status";
import { Table } from "./Table/Table";
import "../styles/Dashboard/Dashboard.css";

export const Main = ({ showSubNav, closeSubNav }) => {
  const [canadaData, setCanadaData] = useState({});
  const { Date } = canadaData;

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

  useEffect(() => {
    getCurrentData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div className={showSubNav ? "main" : "main noSubNav"}>
        <Intro region={"National"} Date={Date} />
        <Graph region={"National"} country={"canada"} days={14} />
        <Status statusData={canadaData} />
        <Table country={"canada"} title={"National"} number={"13"} />
        {showSubNav && (
          <div className="darkBg" onClick={() => closeSubNav()}></div>
        )}
      </div>
    </Fragment>
  );
};
