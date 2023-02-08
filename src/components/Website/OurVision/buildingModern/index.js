import React from "react";
import { Check, CheckBox } from "@mui/icons-material";

import "./styles.scss";

const BuildingModern = () => {
  return (
    <section className={`buildModern`}>
      <div className="wrapper">
        <div className={`container`}>
          <div className={`left`}>
            <div className={`left-top`}>
              <h4>
                We're Building Modern <br />
                And High Software
              </h4>
              <p>
                Both rest of know draw fond post as. It agreement defective to
                excellent. Feebly do engage of narrow. Extensive repulsive
                belonging depending if promotion be zealously as. Preference
                inquietude ask now are dispatched led appearance. Small meant in
                so doubt hopes.
              </p>
              <ul className="check-container">
                <li className="check-completed">
                  <span>
                    <Check style={{ color: "#2568ef" }} />
                  </span>
                  Answered one fat indulged margaret sir shutters together
                </li>
                <li className="check-completed">
                  <span>
                    <Check style={{ color: "#2568ef" }} />
                  </span>
                  Answered one fat indulged margaret sir shutters together
                </li>
                <li className="check-completed">
                  <span>
                    <Check style={{ color: "#2568ef" }} />
                  </span>
                  Answered one fat indulged margaret sir shutters together
                </li>
              </ul>
            </div>

            {/* <hr /> */}

            <div className={`left-bottom`}>
              <h4>
                Outstanding annual results from our <br /> awesome Team
              </h4>
            </div>
          </div>
          <div className={`right`}>
            <div className={`built-grid`}>
              <div className={`grid-item1`}>
                <CheckBox />
                <h5>Ticket Manager</h5>
                <p>
                  Downs those still witty an balls so chief so. Moment an little
                  remain no lively
                </p>
              </div>
              <div className={`grid-item2`}>
                <CheckBox />
                <h5>Live Messaging</h5>
                <p>
                  Downs those still witty an balls so chief so. Moment an little
                  remain no lively
                </p>
              </div>
              <div className={`grid-item3`}>
                <CheckBox />
                <h5>Email Workflow</h5>
                <p>
                  Downs those still witty an balls so chief so. Moment an little
                  remain no lively
                </p>
              </div>
              <div className={`grid-item4`}>
                <CheckBox />
                <h5>File Upload</h5>
                <p>
                  Downs those still witty an balls so chief so. Moment an little
                  remain no lively
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingModern;
