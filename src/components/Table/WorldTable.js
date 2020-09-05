import React, { useState } from "react";

export const WorldTable = ({ countryData }) => {
  const [allCountries, setAllCountries] = useState(false);
  // THOUSAND SEPARATOR
  const printNumberwithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section className="table worldTable" id="table1">
      <div className="intro">
        <div className="header">
          <h2>Global Chart</h2>
        </div>
        <p>
          The following table indicates the accumulated confirmed, recovered,
          and death statistics for all countries in the WOrld. Please note that
          there could be a slight difference in the following data with the
          real-time statistics.
        </p>
      </div>
      <div
        className={
          allCountries ? "tableContainer showAllCountries" : "tableContainer"
        }
      >
        <span
          class="showAllButton"
          onClick={() => setAllCountries(!allCountries)}
        >
          Click to see {!allCountries ? "all" : "top"} countries
        </span>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
            </tr>
          </thead>
          <tbody>
            {countryData &&
              countryData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td style={{ width: "25%" }}>{data.Country}</td>
                    <td style={{ width: "25%" }}>
                      {printNumberwithCommas(data.TotalConfirmed)}{" "}
                      <span
                        className={
                          data.NewConfirmed === 0
                            ? "steady"
                            : data.NewConfirmed > 0
                            ? "plus"
                            : "minus"
                        }
                      >
                        ({data.NewConfirmed > 0 && "+"}
                        {printNumberwithCommas(data.NewConfirmed)})
                      </span>
                    </td>
                    <td style={{ width: "25%" }}>
                      {printNumberwithCommas(data.TotalRecovered)}{" "}
                      <span
                        className={
                          data.NewRecovered === 0
                            ? "steady"
                            : data.NewRecovered > 0
                            ? "plus"
                            : "minus"
                        }
                      >
                        ({data.NewRecovered > 0 && "+"}
                        {printNumberwithCommas(data.NewRecovered)})
                      </span>
                    </td>
                    <td style={{ width: "25%" }}>
                      {printNumberwithCommas(data.TotalDeaths)}{" "}
                      <span
                        className={
                          data.NewDeaths === 0
                            ? "steady"
                            : data.NewDeaths > 0
                            ? "plus"
                            : "minus"
                        }
                      >
                        ({data.NewDeaths > 0 && "+"}
                        {printNumberwithCommas(data.NewDeaths)})
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </section>
  );
};
