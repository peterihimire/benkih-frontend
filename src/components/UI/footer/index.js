import React from "react";
// import logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";
// import { ReactComponent as Facebook } from "../../../assets/images/facebook.svg";
// import { ReactComponent as Instagram } from "../../../assets/images/instagram.svg";
// import { ReactComponent as Linkedin } from "../../../assets/images/linkedin.svg";
// import { ReactComponent as Twitter } from "../../../assets/images/twitter.svg";

import "./styles.scss";

const Footer = () => {
  return (
    <footer className={`footer`}>
      <div className={`wrapper`}>
        <div className={`first`}>
          <div className="logo">
            <Link to="/">
              HalaDigital
              {/* <img src={logo} alt='' /> */}
            </Link>
          </div>
        </div>
        <div className={`second`}>
          <div className={``}>
            <h3>Services</h3>
            <ul className="">
              <li>
                <Link to="/">Showcases</Link>
              </li>
              <li>
                <Link to="/products-services">Products and Services</Link>
              </li>
              <li>
                <Link to="/our-process">Our Process</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className={``}>
            <h3>Support</h3>
            <ul className="">
              <li>
                <Link to="/">Showcases</Link>
              </li>
              <li>
                <Link to="/products-services">Products and Services</Link>
              </li>
              <li>
                <Link to="/our-process">Our Process</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className={``}>
            <h3>Connect with us</h3>
            <div className="">
              <a
                href="https://www.facebook.com/omniswift"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                {/* <Facebook /> */}
              </a>
              <a
                href="https://www.linkedin.com/company/omniswift/?originalSubdomain=ng"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                {/* <Linkedin /> */}
              </a>
              <a
                href="https://twitter.com/omniswift"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                {/* <Twitter /> */}
              </a>
              <a
                href="https://www.instagram.com/omniswiftltd/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                {/* <Instagram /> */}
              </a>
            </div>
          </div>
        
        </div>
      </div>
      <div className={`outro wrapper`}>
        <div className="copyright">
          <p>Copyright © 2022 — Omniswift Limited, All Rights Reserved</p>
        </div>
        <div className={`policy-terms`}>
          <div className="policy">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
          <div className="terms">
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
