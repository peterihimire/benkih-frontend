import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowDownward, DarkModeOutlined } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { faC } from "@fortawesome/free-regular-svg-icons";

import { WbSunnyOutlined } from "@mui/icons-material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import useDarkMode from "use-dark-mode";

import "./styles.scss";

const Nav = ({ isOpen }) => {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname.split("/")[1]);
  const fullPath = location.pathname;
  let pathUrl = location.pathname.split("/")[1];

  const darkMode = useDarkMode(false);
  console.log(darkMode);

  const [about, openAbout] = useState(false);

  useEffect(() => {
    openAbout(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      openAbout(false);
    }
  }, [isOpen]);

  return (
    <nav className={`nav ${isOpen ? "show" : ""}`} id="navbar">
      <ul className="navLinks">
        <li>
          <NavLink to="/" activeclassname="active" exact="true">
            Home
          </NavLink>
        </li>
        <li className={`hasDrop`}>
          <button
            className={`hasDropBtn`}
            onClick={() => {
              openAbout(!about);
            }}
          >
            <span
              className={`${fullPath.includes("about-us") ? "active" : ""}`}
            >
              About Us
            </span>
            {about ? (
              // <KeyboardArrowDown
              //   className={`${fullPath.includes("about-us") ? "active" : ""}`}
              // />

              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${fullPath.includes("about-us") ? "active" : ""}`}
              />
            ) : (
              // <KeyboardArrowDown
              //   className={`${fullPath.includes("about-us") ? "active" : ""}`}
              // />
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${fullPath.includes("about-us") ? "active" : ""}`}
              />
            )}
          </button>

          <div className={`dropdownMenu dropResources ${about ? "show" : ""}`}>
            <div className={`dropdownContainer`}>
              <ul className={`dropdownWrapper`}>
                <li>
                  <NavLink className={`forDrop`} to="/about-us/who-we-are">
                    Who we are
                  </NavLink>
                </li>
                <li>
                  <NavLink className={`forDrop`} to="/about-us/our-vision">
                    Our Vision
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <NavLink to="/our-process" activeclassname="active">
            Our Process
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" activeclassname="active">
            Contact Us
          </NavLink>
        </li>

        <li onClick={darkMode.toggle}>
          {darkMode.value ? (
            <WbSunnyOutlined className="toggle-theme-dark" />
          ) : (
            <DarkModeOutlined className="toggle-theme-light" />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
