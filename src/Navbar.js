import React from "react";
import { Link } from "react-router-dom";
import armyband78 from "./images/band78.jpeg";
import dropdownImg from "./images/dropdown.png";
import headerImg from "./images/78ArmyBandSiteHeader.png";

export default function Navbar() {
  return (
    <div className="mainnavbar">
      <div className="dropdownDiv">
        <div className="dropdown">
          <img className="dropbtn" src={dropdownImg} alt="" />
          <div className="navbar">
            <Link id="navbarLinks" to="/home">
              Home
            </Link>
            <Link id="navbarLinks" to="/about">
              About
            </Link>
            <Link id="navbarLinks" to="/ensembles">
              Ensembles
            </Link>
            <Link id="navbarLinks" to="/events">
              Events
            </Link>
            <Link id="navbarLinks" to="/media">
              Media
            </Link>
            <Link id="navbarLinks" to="/jobs">
              Career Opportunities
            </Link>
            <Link id="navbarLinks" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <div id="navbarheader">
        <a href="./Home">
          <img src={headerImg} id="bandHomePageLogo"/>
        </a>
        <div id="contactus">
          <Link to="/contact" id="contactusText">
            Contact us
          </Link>
          {/* <h4 href="mailto:musicjoeyoung@gmail.com">Contact Us!</h4> */}
        </div>
      </div>
    </div>
  );
}
