import React, { useCallback } from "react";
import heroImg from "../../../../assets/images/dev-guy-team-ladies.png";
import { Link } from "react-router-dom";

import "./styles.scss";

const Hero = () => {
  return (
    <section className={`hero`}>
     
      {/* The 'wrapper' style without the curly braces is coming from the config scss file  */}
      <div className="wrapper">
        <div className={`container`}>
          <div className={`left`}>
            <h1>
              One Stop <br /> Platform for you.
            </h1>

            <ul>
              <li>Digital Currency Exchange</li>
              <li>Bulk SMS</li>
              <li>Airtime & Data Bundle</li>
              <li>Cable TV Subscription</li>
              <li>Electricity Bill</li>
              <li>WAEC Result Checker PIN</li>
              <li>Naira and Crypto Currency Accepted.</li>
            </ul>

            <div className={`subscribe`}>
              <button className="btn-primary btn-block">Login</button>
              <button className="btn-secondary btn-block">Register</button>
            </div>
          </div>
          <div className={`rightt`}>
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
