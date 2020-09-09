import React, { Fragment } from "react";

export const RelatedSites = ({ showSubNav, closeSubNav }) => {
  return (
    <Fragment>
      <div className={showSubNav ? "relatedSites" : "relatedSites noSubNav"}>
        <h1>COVID-19 Related Sites</h1>
        <div className="sites">
          <ul>
            <li>
              World Health Organization -{" "}
              <a href="/https://covid19.who.int/?gclid=CjwKCAjw19z6BRAYEiwAmo64Lfv1tA6igTZD_9r1hrGW7xRlQJFOr0dJ6IHb4DHQR0zltQCzh4pMRhoCLsMQAvD_BwE">
                WHO(COVID-19 MAP)
              </a>
            </li>
            <li>
              Centers for Deisease Control and Prevention -{" "}
              <a href="/https://www.cdc.gov/coronavirus/2019-nCoV/index.html">
                CDC - Coronavirus
              </a>
            </li>
            <li>
              European Centers for Deisease Control and Prevention -{" "}
              <a href="https://www.ecdc.europa.eu/en/covid-19-pandemic">
                ECDC - Coronavirus
              </a>
            </li>
            <li>
              European Centers for Deisease Control and Prevention -{" "}
              <a href="http://ncov.mohw.go.kr/en">S.Korea - About COVID-19</a>
            </li>
            <li>
              BC Centre for Disease Control -{" "}
              <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks.html?&utm_campaign=gc-hc-sc-coronavirus2021-ao-2021-0005-10020125402&utm_medium=search&utm_source=google-ads-107800103024&utm_content=text-en-434525470206&utm_term=%2Bcovid">
                CDC(COVID-19)
              </a>
            </li>
            <li>
              LIVE COVID-19 DASHBOARD -{" "}
              <a href="https://coronavirus.jhu.edu/map.html">
                CSSE - LIVE UPDATE
              </a>
            </li>
            <li>
              Canada COVID-19 UPDATES -{" "}
              <a href="https://www.covid-19canada.com/">CANADA - LIVE UPDATE</a>
            </li>
            <li>
              COVID-19: Your safety and security outside Canada -{" "}
              <a href="https://travel.gc.ca/travelling/health-safety/covid-19-security">
                Government Policy
              </a>
            </li>
            <li>
              Testing for COVID-19 -{" "}
              <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms/testing.html">
                Diagnosing COVID-19
              </a>
            </li>
            <li>
              Where to get tested for COVID-19 in B.C -{" "}
              <a href="https://bc.ctvnews.ca/list-of-locations-here-s-where-to-get-tested-for-covid-19-in-b-c-1.5065190">
                List of locations
              </a>
            </li>
            <li>
              COVID-19 Prevention and risks -{" "}
              <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks.html?&utm_campaign=gc-hc-sc-coronavirus2021-ao-2021-0005-10020125402&utm_medium=search&utm_source=google-ads-107800103024&utm_content=text-en-434525470206&utm_term=%2Bcovid">
                List of locations
              </a>
            </li>
          </ul>
        </div>
      </div>
      {showSubNav && (
        <div className="darkBg" onClick={() => closeSubNav()}></div>
      )}
    </Fragment>
  );
};
