import React from "react";
// import HomeHero from "./hero";
// import OneWallet from "./ourFeature";
import SmallHero from "../../ui/smallHero";
import WhyChoose from "./whyChoose";
import WeAre from "./weAre";
import GrowFast from "./growFast";
// import Testimonial from "./testimonials";
import { Helmet } from "react-helmet";

const WhoPage = () => {
  return (
    <div className={`homepage`}>
      <Helmet>
        <title>About Us - Who We Are | Benkih</title>
      </Helmet>

      {/* <HomeHero /> */}
      <SmallHero title={`Who We Are`} />
      <WhyChoose />
      <WeAre />
      <GrowFast />
      {/* <OneWallet />
      <Testimonial /> */}
    </div>
  );
};

export default WhoPage;
