import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import { Intro } from "./Intro/Intro";
import { WorldStatus } from "./Status/WorldStatus";

export const World = ({ showSubNav, closeSubNav }) => {
  const [worldData, setWorldData] = useState({});
  const [countryData, setCountryData] = useState({});

  const getWorldData = async () => {
    const url = "https://api.covid19api.com/summary";

    try {
      const res = await axios.get(url);

      setWorldData(res.data.Global);
      setCountryData(res.data.Countries);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWorldData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div className={showSubNav ? "world" : "world noSubNav"}>
        <Intro region={"World"} Date={Date} />
        <WorldStatus statusData={worldData} />
        {showSubNav && (
          <div className="darkBg" onClick={() => closeSubNav()}></div>
        )}
      </div>
    </Fragment>
  );
};
