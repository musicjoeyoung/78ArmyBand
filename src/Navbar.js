import React from "react";
import { Link } from "react-router-dom";
import logo78 from "./images/band78.webp";

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

        <Link id="horizontalLinks" to="/media">
          Media
        </Link>
        <Link id="horizontalLinks" to="/jobs">
          Careers
        </Link>
        <Link id="horizontalLinks" to="/contact">
          Contact
        </Link>
        <Link id="horizontalLinks" to="/request">
          Request
        </Link>
      </div>
      <div className="body">
        <nav role="navigation">
          <div className="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

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
                <a href="/media">Social Media</a>
              </li>
              <li className="li">
                <a href="/jobs">Careers</a>
              </li>
              <li className="li">
                <a href="/contact">Contact</a>
              </li>

              <li className="li">
                <a href="/request">Request</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div id="contactus">
        <Link to="/contact" id="contactusText">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
