import React from "react";
import { Check } from "@mui/icons-material";
// import { CheckSquareTwoTone } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

// import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
// import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";

import "./styles.scss";
import { fontSize } from "@mui/system";

const BuildingModern = () => {
  return (
    <section className={`building-modern`}>
      <div className="wrapper">
        <div className={`container`}>
          <div className={`left`}>
            <div className={`left-top`}>
              <h6>Quality at its best</h6>
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
                    {/* <Check style={{ color: "#2568ef" }} /> */}
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#2568ef" }}
                    />
                  </span>
                  Chapter too parties its letters
                </li>
                <li className="check-completed">
                  <span>
                    {/* <Check style={{ color: "#2568ef" }} /> */}
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#2568ef" }}
                    />
                  </span>
                  Answered one fat indulged margaret sir shutters together
                </li>
                <li className="check-completed">
                  <span>
                    {/* <Check style={{ color: "#2568ef" }} /> */}
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#2568ef" }}
                    />
                  </span>
                  Answered one fat indulged margaret sir shutters together
                </li>
                <li className="check-completed">
                  <span>
                    {/* <Check style={{ color: "#2568ef" }} /> */}
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#2568ef" }}
                    />
                  </span>
                  Conveying or northward offending admitting
                </li>
              </ul>
            </div>

            {/* <hr /> */}

            {/* <div className={`left-bottom`}>
              <h4>
                Outstanding annual results from our <br /> awesome Team
              </h4>
            </div> */}
          </div>
          <div className={`right`}>
            <div className={`built-grid`}>
              <div className={`grid-item1`}>
                {/* <CheckSquareTwoTone
                  twoToneColor="#2568ef"
                  style={{ fontSize: "100px", strokeWidth: "5" }}
                /> */}

                <div className={`icon-container`}>
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    style={{ color: "#2568ef", fontSize: "30px" }}
                  />
                </div>

                <h5>Ticket Manager</h5>
                <p>
                  Downs those still witty an balls so chief so. Moment an little
                  .
                </p>
              </div>
              <div className={`grid-item2`}>
                {/* <FontAwesomeIcon icon={faAddressBook} /> */}
                <div className={`icon-container`}>
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    style={{ color: "#2568ef", fontSize: "30px" }}
                  />
                </div>

                <h5>Live Messaging</h5>
                <p>
                  Downs those still witty an balls so chief so. Moment an little
                  .
                </p>
              </div>
              <div className={`grid-item3`}>
                <div className={`icon-container`}>
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    style={{ color: "#2568ef", fontSize: "30px" }}
                  />
                </div>
                <h5>Email Workflow</h5>
                <p>
                  Downs those still witty an balls so chief so. Moment an little
                  .
                </p>
              </div>
              <div className={`grid-item4`}>
                {/* <FontAwesomeIcon icon={faPlaneDeparture} /> */}
                <div className={`icon-container`}>
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    style={{ color: "#2568ef", fontSize: "30px" }}
                  />
                </div>
                <h5>File Upload</h5>
                <p>
                  Downs those still witty an balls so chief so. Moment an little
                  .
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
