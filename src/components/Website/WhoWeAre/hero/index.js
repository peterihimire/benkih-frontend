import React, { useCallback } from "react";
import heroImg from "../../../../assets/images/dev-guy-team-ladies.png";
import { Link } from "react-router-dom";

import "./styles.scss";

const Hero = () => {
  return (
    <section className={`ourhero`}>
      {/* The 'wrapper' style without the curly braces is coming from the config scss file  */}
      <div className="wrapper">
        <div className={`container`}>
          <div className={`left`}>
            <h4>Who We Are</h4>
          </div>
          <div className={`rightt`}>
            <span>
              <Link to="/">Home</Link>
            </span>
            <div>&gt; Who We Are</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
