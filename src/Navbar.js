import React from "react";
import { Link } from "react-router-dom";
import dropdownImg from "./images/dropdown.png";
import headerImg from "./images/78logo.png";

const Navbar = () => {
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
        <a href="/home">
          <img src={headerImg} id="bandHomePageLogo" alt="78bandlogo" />
        </a>
      </div>
      <div id="contactus">
        <Link to="/contact" id="contactusText">
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
