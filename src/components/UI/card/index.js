import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles.scss";

const ServiceCard = ({ id, image, title, content, ...props }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  const [showMore, setShowMore] = useState(false);

  return (
    <div data-aos="zoom-in" className="service-card" key={id}>
      <img src={image} alt="" className="gloss-icon" />

      <h3>{title}</h3>

      {showMore || `${content}`.length < 150 ? (
        <p>{content}</p>
      ) : (
        <p>{`${content}`.slice(0, 150)}...</p>
      )}

      {`${content}`.length > 150 ? (
        <button
          onClick={() => setShowMore(!showMore)}
          {...props}
          className="read-more"
        >
          {showMore ? "Read less" : "Read more"}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default ServiceCard;
