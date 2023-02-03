import React from "react";
import HomeHero from "./hero";

import ContactForm from "./contactForm";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <div className={`homepage`}>
      <Helmet>
        <title>Contact Us | Benkih</title>
      </Helmet>

      <HomeHero />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
