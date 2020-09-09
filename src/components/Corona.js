import React, { Fragment } from "react";
import "../styles/Info/Info.css";

export const Corona = ({ showSubNav, closeSubNav }) => {
  return (
    <Fragment>
      <div className={showSubNav ? "coronaInfo" : "coronaInfo noSubNav"}>
        <div className="detail">
          <div>
            <h1>What is COVID-19?</h1>
            <p>
              Coronaviruses are a large family of viruses found mostly in
              animals. In humans, they can cause diseases ranging from the
              common cold to more severe diseases such as Severe Acute
              Respiratory Syndrome (SARS) and Middle East Respiratory Syndrome
              (MERS). The disease caused by the new coronavirus has been named
              COVID-19.
              <br /> <br />
              COVID-19 was first identified in late 2019. It was declared a
              global pandemic by the World Health Organization in March 2020.
              <br /> <br />
              <a href="https://en.wikipedia.org/wiki/Coronavirus_disease_2019">
                <i class="fas fa-link"></i> COVID-19 [Wikipedia]
              </a>
            </p>
          </div>
        </div>
        <div className="detail">
          <div className="symptomsContainer">
            <h1>Symptoms</h1>
            <div className="symptoms">
              <div className="symptom">
                <h3>Most Common Symptoms:</h3>
                <ul>
                  <li>Fever</li>
                  <li>Dry Cough</li>
                  <li>Tiredness</li>
                </ul>
              </div>
              <div className="symptom">
                <h3>Less Common Symptoms:</h3>
                <ul>
                  <li>Aches and pains</li>
                  <li>Sore throat</li>
                  <li>Diarrhoea</li>
                  <li>Conjunctivitis</li>
                  <li>Headache</li>
                  <li>Lostt of taste or smell</li>
                  <li>A rash on skin, or discolouration of fingers or toes</li>
                </ul>
              </div>
              <div className="symptom">
                <h3>Serious Symptoms:</h3>
                <ul>
                  <li>Difficulty breathing or shortness of breath</li>
                  <li>Chest pain or pressure</li>
                  <li>Loess of speech or movement</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="notes">
            * Seek immediate medical attention if you have serious symptoms.
            Always call before visiting your doctor or health facility.
            <br /> <br />
            * People with mild symptoms who are otherwise healthy should manage
            their symptoms at home.
            <br />
            <br />* On average it takes 5–6 days from when someone is infected
            with the virus for symptoms to show, however it can take up to 14
            days.
          </div>
        </div>
        <div className="detail">
          <h1>How to prevent COVID-19</h1>
          <p>
            Protect yourself and others around you by knowing the facts and
            taking appropriate precautions. Follow advice provided by your local
            health authority.
          </p>
          <ul>
            <li>
              Clean your hands often. Use soap and water, or an alcohol-based
              hand rub.
            </li>
            <li>
              Maintain a safe distance from anyone who is coughing or sneezing.
            </li>
            <li>Wear a mask when physical distancing is not possible.</li>
            <li>Don’t touch your eyes, nose or mouth.</li>
            <li>
              Cover your nose and mouth with your bent elbow or a tissue when
              you cough or sneeze.
            </li>
            <li>Stay home if you feel unwell.</li>
            <li>
              If you have a fever, cough and difficulty breathing, seek medical
              attention.
            </li>
          </ul>
          <br />
          <div className="notes">
            Calling in advance allows your healthcare provider to quickly direct
            you to the right health facility. This protects you, and prevents
            the spread of viruses and other infections.
            <br />
            <br />
            Masks can help prevent the spread of the virus from the person
            wearing the mask to others. Masks alone do not protect against
            COVID-19, and should be combined with physical distancing and hand
            hygiene. Follow the advice provided by your local health authority.
          </div>
        </div>
      </div>
      {showSubNav && (
        <div className="darkBg" onClick={() => closeSubNav()}></div>
      )}
    </Fragment>
  );
};
