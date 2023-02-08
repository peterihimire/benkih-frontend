import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Hero = () => {
  return (
    <section className={`hero-process`}>
      {/* The 'wrapper' style without the curly braces is coming from the config scss file  */}
      <div className="wrapper">
        <div className={`container`}>
          <div className={`left`}>
            <h4>Our Process</h4>
          </div>
          <div className={`rightt`}>
            <span>
              <Link to="/">Home</Link>
            </span>
            <div>&gt; Our Process</div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
