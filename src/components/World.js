import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import { Intro } from "./Intro/Intro";
import { WorldTable } from "./Table/WorldTable";
import { WorldStatus } from "./Status/WorldStatus";

export const World = ({ showSubNav, closeSubNav }) => {
  const [worldData, setWorldData] = useState({});
  const [countryData, setCountryData] = useState();

  const compareData = (a, b) => {
    if (a.TotalConfirmed < b.TotalConfirmed) {
      return 1;
    }
    if (a.TotalConfirmed > b.TotalConfirmed) {
      return -1;
    }

    return 0;
  };

  const getWorldData = async () => {
    const url = "https://api.covid19api.com/summary";

    try {
      let worldInOrder = [];
      const res = await axios.get(url);

      setWorldData(res.data.Global);
      // setCountryData(res.data.Countries);

      await worldInOrder.push(res.data.Countries);
      const newWorldInOrder = await worldInOrder[0].sort(compareData);

      await setCountryData(newWorldInOrder);
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
        <div className="videoContainer">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/NMre6IAAAiU"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
        <WorldStatus statusData={worldData} />
        <WorldTable countryData={countryData} />
        {showSubNav && (
          <div className="darkBg" onClick={() => closeSubNav()}></div>
        )}
      </div>
    </Fragment>
  );
};
