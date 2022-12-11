import React from "react";
import { Link } from "react-router-dom";
import dropdownImg from "./images/dropdown.png";
import logo78 from "./images/band78.jpeg";

const Navbar = () => {
  return (
    <div className="mainnavbar">
      <div className="horizontalNav">
        <img id="navbarLogo" src={logo78} alt="78th Band logo" />
        <Link id="horizontalLinks" to="/home">
          Home
        </Link>
        <Link id="horizontalLinks" to="/history">
          History
        </Link>
        <Link id="horizontalLinks" to="/meettheband">
          Meet the Band
        </Link>
        <Link id="horizontalLinks" to="/ensembles">
          Ensembles
        </Link>
        <Link id="horizontalLinks" to="/events">
          Events
        </Link>
        <Link id="horizontalLinks" to="/media">
          Media
        </Link>
        <Link id="horizontalLinks" to="/jobs">
          Career Opportunities
        </Link>
        <Link id="horizontalLinks" to="/contact">
          Contact us
        </Link>
      </div>
      <div className="dropdownDiv">
        <div className="dropdown">
          <img className="dropbtn" src={dropdownImg} alt="" />
          <div className="navbar">
            <Link id="navbarLinks" to="/home">
              Home
            </Link>
            <Link id="navbarLinks" to="/history">
              History
            </Link>
            <Link id="navbarLinks" to="/meettheband">
              Meet the Band
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
      {/*   <div id="navbarheader">
        <a href="/home">
          <img src={headerImg} id="bandHomePageLogo" alt="78bandlogo" />
        </a>
      </div> */}

      <div id="contactus">
        <Link to="/contact" id="contactusText">
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
