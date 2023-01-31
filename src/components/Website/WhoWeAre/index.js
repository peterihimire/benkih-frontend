import React from "react";
import HomeHero from "./hero";
// import OneWallet from "./ourFeature";
import WhyChoose from "./whyChoose";
import BuildingModern from "./buildingModern";
// import Testimonial from "./testimonials";
import { Helmet } from "react-helmet";

const WhoPage = () => {
  return (
    <div className={`homepage`}>
      <Helmet>
        <title>About Us - Who We Are | Benkih</title>
      </Helmet>

      <HomeHero />
      <BuildingModern />
      <WhyChoose />
      {/* <OneWallet />
      <Testimonial /> */}
    </div>
  );
};

export default WhoPage;