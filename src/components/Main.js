import React, { Fragment, useState, useEffect } from "react";

import axios from "axios";

export const Main = ({ showSubNav }) => {
  const [canadaData, setCanadaData] = useState({});

  const getData = () => {
    let url = "https://api.covid19api.com/total/dayone/country/canada";
    axios.get(url).then((res) => setCanadaData(res.data[res.data.length - 1]));
  };

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <Fragment>
      <div className={showSubNav ? "main" : "main noSubNav"}>
        {canadaData && canadaData.Confirmed}
        <p>test</p>
      </div>
    </Fragment>
  );
};
