import React from "react";
import HomeHero from "./hero";
// import OneWallet from "./ourFeature";
import WhyChoose from "./whyChoose";
import WeAre from "./weAre";
// import Testimonial from "./testimonials";
import { Helmet } from "react-helmet";

const WhoPage = () => {
  return (
    <div className={`homepage`}>
      <Helmet>
        <title>About Us - Who We Are | Benkih</title>
      </Helmet>

      <HomeHero />
      <WeAre />
      <WhyChoose />
      {/* <OneWallet />
      <Testimonial /> */}
    </div>
  );
};

export default WhoPage;
