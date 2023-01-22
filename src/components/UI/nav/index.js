import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowDownward, DarkModeOutlined } from "@mui/icons-material";
import { WbSunnyOutlined } from "@mui/icons-material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import useDarkMode from "use-dark-mode";

import "./styles.scss";

const Nav = ({ isOpen }) => {
  const location = useLocation();
  console.log(location);
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
            onMouseEnter={() => {
              openAbout(!about);
            }}
            onMouseLeave={() => {
              openAbout(!about);
            }}
          >
            <span>About Us</span>
            {about ? <KeyboardArrowDown /> : <KeyboardArrowDown />}
          </button>

          <div className={`dropdownMenu dropResources ${about ? "show" : ""}`}>
            <div className={`dropdownContainer`}>
              <ul className={`dropdownWrapper`}>
                <li>
                  <NavLink className={`forDrop`} to="/about-us/who-we-are">
                    <div className={`dropIcon`}></div>
                    <div className={`dropText`}>
                      <span className={`dropTextHead`}>Who We Are</span>
                      <span className={`dropDesc`}>
                        Who KoboTree are as a Real Estate Agent
                      </span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={`forDrop`} to="/about-us/our-vision">
                    <div className={`dropIcon`}></div>
                    <div className={`dropText`}>
                      <span className={`dropTextHead`}>Our Vision</span>
                      <span className={`dropDesc`}>
                        Quickly and simply map your company's cloud talent.
                      </span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={`forDrop`} to="/about-us/case-studies">
                    Case Studies
                    <div className={`dropIcon`}></div>
                    <div className={`dropText`}>
                      <span className={`dropTextHead`}>Case Studies</span>
                      <span className={`dropDesc`}>
                        Simulators of real-world cloud difficulties are easily
                        accessible.
                      </span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={`forDrop`} to="/about-us/blog">
                    <div className={`dropIcon`}></div>
                    <div className={`dropText`}>
                      <span className={`dropTextHead`}>Blog</span>
                      <span className={`dropDesc`}>
                        Quickly and simply map your company's cloud talent.
                      </span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <NavLink to="/pricing" activeclassname="active">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" activeclassname="active">
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" activeclassname="active">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeclassname="active">
            Login
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

// onClick={() => handleDarkMode()}
// onClick={() => {
//   dispatch({ type: actionTypes.SET_DARK });
// }}

// const handleDarkMode = () => {
//   // dispatch(toggleDark());
//   dispatch(actionTypes.SET_DARK);
// };

// import React, { useEffect } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { DarkModeOutlined } from "@mui/icons-material";
// import { WbSunnyOutlined } from "@mui/icons-material";
// import { useSelector, useDispatch } from "react-redux";
// import { darkStart } from "../../../redux/actions/themeAction";
// import * as actionTypes from "../../../redux/actions/actionTypes";

// import "./styles.scss";

// const Nav = ({ isOpen }) => {
//   const dispatch = useDispatch();

//   const store = useSelector((state) => {
//     return state;
//   });

//   const { theme } = store;

//   useEffect(() => {
//     localStorage.setItem("dark_mode", theme.darkMode);
//   }, [theme.darkMode]);

//   return (
//     <nav className={`nav ${isOpen ? "show" : ""}`} id="navbar">
//       <ul className="navLinks">
//         <li>
//           <NavLink to="/" activeclassname="active" exact="true">
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/pricing" activeclassname="active">
//             Pricing
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact-us" activeclassname="active">
//             Contact Us
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/register" activeclassname="active">
//             Register
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/login" activeclassname="active">
//             Login
//           </NavLink>
//         </li>
//         <li onClick={() => dispatch(darkStart())}>
//           {theme.darkMode ? (
//             <WbSunnyOutlined className="toggle-theme" />
//           ) : (
//             <DarkModeOutlined className="toggle-theme" />
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Nav;

// // onClick={() => handleDarkMode()}
// // onClick={() => {
// //   dispatch({ type: actionTypes.SET_DARK });
// // }}

// // const handleDarkMode = () => {
// //   // dispatch(toggleDark());
// //   dispatch(actionTypes.SET_DARK);
// // };
