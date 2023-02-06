import React from "react";

import { CheckBox } from "@mui/icons-material";
import FeatureCard from "../../../ui/featureCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import "./styles.scss";

const WhyChoose = () => {
  const features = [
    {
      id: "01",
      title: "App Integration",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: (
        <FontAwesomeIcon icon={faPlaneDeparture} className={`mapped-icon`} />
      ),
    },
    {
      id: "02",
      title: "Color Schemes",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: (
        <FontAwesomeIcon icon={faPlaneDeparture} className={`mapped-icon`} />
      ),
    },
    {
      id: "03",
      title: "High Resolution",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: (
        <FontAwesomeIcon icon={faPlaneDeparture} className={`mapped-icon`} />
      ),
    },
  ];

  return (
    <section className={`why-choose`}>
      <div className="wrapper">
        <div className={`choose-head`}>
          <h6>Fast business growth</h6>
          <h3>
            Qualified development team specailize for business growth
          </h3>
          <p>
            Learning day desirous informed expenses material returned six the.
            She enabled invited exposed him another. Reasonably conviction
            solicitude me mr at discretion reasonable. Age out full gate bed day
            lose.
          </p>
        </div>
        <div className={`mapped-container`}>
          {features.map((feat) => {
            return (
              <div className={`mapped-content`}>
                <div>{feat.icon}</div>
                <h6>{feat.title}</h6>
                <p>{feat.exerpt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
