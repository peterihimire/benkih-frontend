import React from "react";
// import logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../../assets/images/facebook.svg";
import { ReactComponent as Instagram } from "../../../assets/images/instagram.svg";
import { ReactComponent as Youtube } from "../../../assets/images/youtube.svg";
import { ReactComponent as Twitter } from "../../../assets/images/twitter.svg";
import Input from "../footerInput";

import "./styles.scss";

const Footer = () => {
  return (
    <footer className={`footer`}>
      <div className="wrapper">
        <div className={`first`}>
          <div className={`logo`}>
            <Link to="/">
              Benk<span>ih</span>
              {/* <img src={logo} alt='' /> */}
            </Link>
          </div>

          <div className={`newsletter`}>
            <p>
              Subscribe to our weekly newsletter, by entering your email below.
            </p>
            <form className={`form`}>
              <div className={`formGroup`}>
                <Input
                  type="email"
                  id="email"
                  // required
                  name="email"
                  placeholder="Enter your email..."
                  src="/images/send-icon.svg"
                  alt=""
                  loading="lazy"
                />
              </div>
            </form>
          </div>
        </div>
        <div className={`second`}>
          <div className={`quick-links-wrapper`}>
            <h3>Company</h3>
            <ul className={`quick-links`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products-services">About Us</Link>
              </li>
              <li>
                <Link to="/our-process">Our Process</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className={`location-wrapper`}>
            <h3>Location</h3>
            <ul className={`location-list`}>
              <li>
                <span>Abuja :</span> No. 2 Iwopin close, area 1 Garki, Abuja.
              </li>

              <li>
                <span>Lagos :</span> No. 6 Oyediran street, Ikeja, Lagos.
              </li>
            </ul>
          </div>

          <div className={`social-wrapper`}>
            <h3>Join our community</h3>
            <p>we are welcoming some new faces at Benkih to give you</p>
            <div className={`social-list`}>
              <a
                href="https://www.facebook.com/omniswift"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <Facebook />
              </a>
              <a
                href="https://www.linkedin.com/company/omniswift/?originalSubdomain=ng"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <Youtube />
              </a>
              <a
                href="https://twitter.com/omniswift"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <Twitter />
              </a>
              <a
                href="https://www.instagram.com/omniswiftltd/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`outro wrapper`}>
        <div className={`policy-terms`}>
          <div className="policy">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
          <div className="terms">
            <Link to="/terms-and-conditions">Terms of Use</Link>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © 2023 — Benkih Limited, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
