import React from "react";
import HomeHero from "./hero";
import SmallHero from "../../ui/smallHero";
// import OneWallet from "./ourFeature";
import WhyChoose from "./whyChoose";
import OurProcess from "./ourProcess";
// import Testimonial from "./testimonials";
import MapTalent from "./mapTalent";
import { Helmet } from "react-helmet";

const ProcessPage = () => {
  return (
    <div className={`homepage`}>
      <Helmet>
        <title>Our Process | Benkih</title>
      </Helmet>

      {/* <HomeHero /> */}
      <SmallHero title={`Our Process`} />
      <OurProcess />
      <WhyChoose />
      <MapTalent />
      {/* <OneWallet />
      <Testimonial /> */}
    </div>
  );
};

export default ProcessPage;
