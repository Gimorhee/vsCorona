import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import { Intro } from "./Intro/Intro";
import { Graph } from "./Graph/Graph";
import { Status } from "./Status/Status";
import { Table } from "./Table/Table";

export const Korea = ({ showSubNav }) => {
  const [koreaData, setKoreaData] = useState({});
  const { Date } = koreaData;

  // GETTING CURRENT DATA
  const getCurrentData = async () => {
    const url = "https://api.covid19api.com/total/dayone/country/south-korea";

    try {
      const res = await axios.get(url);

      setKoreaData(res.data[res.data.length - 1]);
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
      <div className={showSubNav ? "korea" : "korea noSubNav"}>
        <Intro region={"Korea"} Date={Date} />
        <Graph region={"Korea"} country={"south-korea"} days={30} />
        <Status statusData={koreaData} />
        <Table country={"south-korea"} title={"Korea"} number={"13"} />
        {showSubNav && <div className="darkBg"></div>}
      </div>
    </Fragment>
  );
};
