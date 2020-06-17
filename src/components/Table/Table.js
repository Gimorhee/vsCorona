import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import "moment-timezone";

export const Table = ({ country }) => {
  const [twoWeeksData, setTwoWeeksData] = useState();
  const [regionalData, setRegionalData] = useState();

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

  // GETTING REGIONAL DATA WITH DESIRED FORMAT
  const getRegionalData = async () => {
    try {
      let url = `https://api.covid19api.com/dayone/country/${country}`;
      const res = await axios.get(url);
      const numOfProvince = 13;
      let regionalData = [];

      for (let i = 1; i <= numOfProvince; i++) {
        const provinceName = res.data[res.data.length - i].Province;
        const confirmedNumber = res.data[res.data.length - i].Confirmed;
        const deathNumber = res.data[res.data.length - i].Deaths;
        const activeNumber = res.data[res.data.length - i].Active;
        const recoveredNumber = res.data[res.data.length - i].Recovered;
        const totalData = {
          confirmedNumber,
          deathNumber,
          activeNumber,
          recoveredNumber,
        };

        switch (provinceName) {
          case "Quebec":
            regionalData["Quebec"] = totalData;
            break;

          case "Ontario":
            regionalData["Ontario"] = totalData;
            break;

          case "Alberta":
            regionalData["Alberta"] = totalData;
            break;

          case "British Columbia":
            regionalData["British Columbia"] = totalData;
            break;

          case "Saskatchewan":
            regionalData["Saskatchewan"] = totalData;
            break;

          case "Manitoba":
            regionalData["Manitoba"] = totalData;
            break;

          case "Yukon":
            regionalData["Yukon"] = totalData;
            break;

          case "Nova Scotia":
            regionalData["Nova Scotia"] = totalData;
            break;

          case "Northwest Territories":
            regionalData["Northwest Territories"] = totalData;
            break;

          case "New Brunswick":
            regionalData["New Brunswick"] = totalData;
            break;

          case "Newfoundland and Labrador":
            regionalData["Newfoundland and Labrador"] = totalData;
            break;

          case "Grand Princess":
            regionalData["Grand Princess"] = totalData;
            break;

          case "Prince Edward Island":
            regionalData["Prince Edward Island"] = totalData;
            break;
          default:
            console.log("etc province");
            break;
        }
      }

      console.log("!!", regionalData);
    } catch (err) {
      console.log(err);
    }
  };

  // THOUSAND SEPARATOR
  const printNumberwithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    getTwoWeeksData();
    getRegionalData();
  }, []);
  return (
    <Fragment>
      <section className="table">
        <div className="intro">
          <div className="header">
            <h2>National Statistics Timeline</h2>
          </div>
          <p>
            Only 2 weeks worth of data are provided for the convinience. Feel
            free to request me if you wish to see the past statistics. Please
            note that the +/- numbers indicate the <b>day-over-day</b> changes.
          </p>
        </div>
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Active</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
              </tr>
            </thead>

            <tbody>
              {twoWeeksData &&
                twoWeeksData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <Moment format="MM-DD" add={{ days: 1 }}>
                          {data.Date}
                        </Moment>
                      </td>
                      <td>
                        {printNumberwithCommas(data.Active)}{" "}
                        <span
                          className={data.ActiveDiff > 0 ? "plus" : "minus"}
                        >
                          ({data.ActiveDiff > 0 && "+"}
                          {printNumberwithCommas(data.ActiveDiff)})
                        </span>
                      </td>
                      <td>
                        {printNumberwithCommas(data.Confirmed)}{" "}
                        <span
                          className={data.ConfirmedDiff > 0 ? "plus" : "minus"}
                        >
                          ({data.ConfirmedDiff > 0 && "+"}
                          {printNumberwithCommas(data.ConfirmedDiff)})
                        </span>
                      </td>
                      <td>
                        {printNumberwithCommas(data.Recovered)}{" "}
                        <span
                          className={data.RecoveredDiff > 0 ? "plus" : "minus"}
                        >
                          ({data.RecoveredDiff > 0 && "+"}
                          {printNumberwithCommas(data.RecoveredDiff)})
                        </span>
                      </td>
                      <td>
                        {printNumberwithCommas(data.Deaths)}{" "}
                        <span
                          className={data.DeathsDiff > 0 ? "plus" : "minus"}
                        >
                          ({data.DeathsDiff > 0 && "+"}
                          {printNumberwithCommas(data.DeathsDiff)})
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
      <section className="table2"></section>
    </Fragment>
  );
};
