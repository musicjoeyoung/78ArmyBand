import React from "react";
import { Link } from "react-router-dom";
import armyband78 from "./images/band78.jpeg";
import dropdownImg from "./images/dropdown.png";

export default function Navbar() {
  return (
    <div className="mainnavbar">
      <div className="dropdownDiv">
        <div className="dropdown">
          <img className="dropbtn" src={dropdownImg} alt="" />
          <div className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/ensembles">Ensembles</Link>
            <Link to="/events">Events</Link>
            <Link to="/media">Media</Link>
            <Link to="/jobs">Career Opportunities</Link>
            <Link to="/contact">Contact us</Link>
          </div>
        </div>
      </div>
      <div id="navbarheader">
        <img src={armyband78} alt="" id="bandlogo" />
        <h3 id="navbartitle">78th Army Band</h3>
        <div id="contactus">
          <h4 id="contactusText" href="mailto:musicjoeyoung@gmail.com">
            Contact Us!
          </h4>
        </div>
      </div>
    </div>
  );
}