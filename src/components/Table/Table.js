import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

export const Table = ({ country }) => {
  const [twoWeeksData, setTwoWeeksData] = useState();

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

        if (i === 14) {
          console.log(res.data[res.data.length - 15].Active);
        }

        oneDayData["Date"] = prevData.Date;
        oneDayData["Active"] = prevData.Active;
        oneDayData["Confirmed"] = prevData.Confirmed;
        oneDayData["Recovered"] = prevData.Recovered;
        oneDayData["Deaths"] = prevData.Deaths;

        if (i < 14) {
          oneDayData["ActiveDiff"] = prevData.Active - nextData.Active;
          oneDayData["ConfirmedDiff"] = prevData.Confirmed - nextData.Confirmed;
          oneDayData["RecoveredDiff"] = prevData.Recovered - nextData.Recovered;
          oneDayData["DeathsDiff"] = prevData.Deaths - nextData.Deaths;
        } else {
          oneDayData["ActiveDiff"] = "-";
          oneDayData["ConfirmedDiff"] = "-";
          oneDayData["RecoveredDiff"] = "-";
          oneDayData["DeathsDiff"] = "-";
        }

        totalData.push(oneDayData);
      }

      setTwoWeeksData(totalData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTwoWeeksData();
  }, []);
  return (
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
      {/* <table>
        <tr>
          <th>Date(</th>
          <th>Active</th>
          <th>Confirmed</th>
          <th>Recovered</th>
          <th>Deaths</th>
        </tr>
      </table> */}
    </section>
  );
};
