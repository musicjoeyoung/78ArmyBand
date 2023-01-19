import React from "react";
import logo78 from "./images/band78.webp";
import dropdown from "./images/dropdown.png";

const Navbar = () => {
  return (
    <div className="mainnavbar">
      <div className="horizontalNav">
        <img id="navbarLogo" src={logo78} alt="78th Band logo" />
        <ul className="desktopMenu">
          <li className="li">
            <a href="/home">Home</a>
          </li>
          <li className="li">
            <a href="/history">History</a>
          </li>
          <li className="li">
            <a href="/meettheband">Meet the Band</a>
          </li>
          <li className="li">
            <a href="/ensembles">Ensembles</a>
          </li>
          <li className="li">
            <a href="/media">Watch & Listen</a>
          </li>
          <li className="li">
            <a href="/jobs">Careers</a>
          </li>
          <li className="li">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="dropdown">
        <img src={dropdown} alt="dropdown button" />
        <div className="dropdown-content">
          <ul className="menu">
            <li className="li">
              <a href="/home">Home</a>
            </li>
            <li className="li">
              <a href="/history">History</a>
            </li>
            <li className="li">
              <a href="/meettheband">Meet the Band</a>
            </li>
            <li className="li">
              <a href="/ensembles">Ensembles</a>
            </li>
            <li className="li">
              <a href="/media">Watch & Listen</a>
            </li>
            <li className="li">
              <a href="/jobs">Careers</a>
            </li>
            <li className="li">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <a href="/" id="navbarLogoMobileA">
        <img id="navbarLogoMobile" src={logo78} alt="78th Band logo" />
      </a>
    </div>
  );
};

export default Navbar;
