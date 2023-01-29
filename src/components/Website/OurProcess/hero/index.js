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
              We're building <span>software</span> to help
            </h1>

            <p>
              Celebrated delightful an especially increasing instrument am.
              Indulgence contrasted sufficient to unpleasant in in insensible
              favourable.
            </p>

            <div className={`subscribe`}>
              <button className="btn-primary btn-block">Get Started</button>
            </div>
          </div>
          <div className={`rightt indicator`}>
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
