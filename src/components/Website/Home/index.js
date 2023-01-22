import React from "react";
import HomeHero from "./hero";
import OneWallet from "./oneWallet";
import WhyChoose from "./whyChoose";
import Testimonial from "./testimonials";
import { Helmet } from "react-helmet";
import "./styles.scss";

const HomePage = () => {
  return (
    <div className={`homepage`}>
      <Helmet>
        <title>Home | HalaDigital</title>
      </Helmet>
      {/* <div className="wrapper"> */}
      <HomeHero />
      <OneWallet />
      <WhyChoose />
      <Testimonial />
      {/* </div> */}
    </div>
  );
};

export default HomePage;
