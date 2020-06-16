import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import "moment-timezone";

export const Table = ({ country }) => {
  const [twoWeeksData, setTwoWeeksData] = useState();

  // CONVERTING DATA INTO 2 WEEKS WITH DESIRED FORMAT
  const getTwoWeeksData = async () => {
    const url = `https://api.covid19api.com/total/dayone/country/${country}`;

    try {
      const res = await axios.get(url);
      const twoWeeks = 14;
      let totalData = [];

      for (let i = 1; i <= twoWeeks; i++) {
        let oneDayData = {};
        let prevData = res.data[res.data.length - i];
        let nextData = res.data[res.data.length - i - 1];

        oneDayData["Date"] = prevData.Date;
        oneDayData["Active"] = prevData.Active;
        oneDayData["Confirmed"] = prevData.Confirmed;
        oneDayData["Recovered"] = prevData.Recovered;
        oneDayData["Deaths"] = prevData.Deaths;
        oneDayData["ActiveDiff"] = prevData.Active - nextData.Active;
        oneDayData["ConfirmedDiff"] = prevData.Confirmed - nextData.Confirmed;
        oneDayData["RecoveredDiff"] = prevData.Recovered - nextData.Recovered;
        oneDayData["DeathsDiff"] = prevData.Deaths - nextData.Deaths;

        totalData.push(oneDayData);
      }

      setTwoWeeksData(totalData);
    } catch (error) {
      console.log(error);
    }
  };

  // THOUSAND SEPARATOR
  const printNumberwithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    getTwoWeeksData();
  }, []);
  return (
    <Fragment>
      <section className="table">
        <div className="intro">
          <div className="header">
            <h2>National Statistics Timeline</h2>
          </div>
          <p>
            Only 2 weeks worth of data are collected for the convinience. Please
            request if you wish to see the past statistics. * Note that the +
            numbers indicate the <b>day-over-day</b> increment.
          </p>
        </div>
        <div className="tableContainer">
          <table>
            <tr>
              <th>Date</th>
              <th>Active</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
            </tr>

            {twoWeeksData &&
              twoWeeksData.map((data) => {
                return (
                  <tr>
                    <td>
                      <Moment format="MM-DD" add={{ days: 1 }}>
                        {data.Date}
                      </Moment>
                    </td>
                    <td>
                      {printNumberwithCommas(data.Active)}{" "}
                      <span>
                        {data.ActiveDiff > 0 && "+"}{" "}
                        {printNumberwithCommas(data.ActiveDiff)}
                      </span>
                    </td>
                    <td>
                      {printNumberwithCommas(data.Confirmed)}{" "}
                      <span>
                        {data.ConfirmedDiff > 0 && "+"}{" "}
                        {printNumberwithCommas(data.ConfirmedDiff)}
                      </span>
                    </td>
                    <td>
                      {printNumberwithCommas(data.Recovered)}{" "}
                      <span>
                        {data.RecoveredDiff > 0 && "+"}{" "}
                        {printNumberwithCommas(data.RecoveredDiff)}
                      </span>
                    </td>
                    <td>
                      {printNumberwithCommas(data.Deaths)}{" "}
                      <span>
                        {data.DeathsDiff > 0 && "+"}{" "}
                        {printNumberwithCommas(data.DeathsDiff)}
                      </span>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </section>
    </Fragment>
  );
};
