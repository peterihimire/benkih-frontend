import React from "react";
import { Check, CheckBox, CheckBoxSharp } from "@mui/icons-material";
import FeatureCard from "../../../ui/featureCard";
import {
  HomeOutlined,
  HomeTwoTone,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  CheckSquareTwoTone,
  CheckOutlined,
} from "@ant-design/icons";

import "./styles.scss";

const OurProcess = () => {
  const features = [
    {
      id: "01",
      title: "App Integration",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <CheckBox />,
    },
    {
      id: "02",
      title: "Color Schemes",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <CheckBox />,
    },
    {
      id: "03",
      title: "High Resolution",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <CheckBox />,
    },
    {
      id: "04",
      title: "Drag and Drop",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <CheckBox />,
    },
    {
      id: "05",
      title: "Mobile Responsive",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <CheckBox />,
    },
    {
      id: "06",
      title: "Scalable Architecture",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <CheckBox />,
    },
  ];
  return (
    <section className={`ourProcess`}>
      <div className="wrapper">
        <div className={`container`}>
          {features.map((feature, index) => {
            return (
              <FeatureCard
                title={feature.title}
                content={feature.exerpt}
                id={feature.id}
                icon={feature.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
