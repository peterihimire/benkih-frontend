import React, { useCallback } from "react";
import heroImg from "../../../../assets/images/dev-guy-team-ladies.png";
import { Link } from "react-router-dom";

import "./styles.scss";

const Hero = () => {
  return (
    <section className={`hero-contact`}>
      {/* The 'wrapper' style without the curly braces is coming from the config scss file  */}
      <div className="wrapper">
        <div className={`container`}>
          <div className={`left`}>
            <h4>Contact Us</h4>
          </div>
          <div className={`rightt`}>
            <span>
              <Link to="/">Home</Link>
            </span>
            <div>&gt; Contact Us</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
