import React from "react";
import HomeHero from "./hero";
// import OneWallet from "./ourFeature";
import WhyChoose from "./whyChoose";
import OurProcess from "./ourProcess";
// import Testimonial from "./testimonials";
import { Helmet } from "react-helmet";

const ProcessPage = () => {
  return (
    <div className={`homepage`}>
      <Helmet>
        <title>Our Process | Benkih</title>
      </Helmet>

      <HomeHero />
      <OurProcess />
      <WhyChoose />
      {/* <OneWallet />
      <Testimonial /> */}
    </div>
  );
};

export default ProcessPage;
