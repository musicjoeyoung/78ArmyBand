import React from "react";
import logo78 from "./images/band78.webp";
import dropdown from "./images/dropdown.png";

const Navbar = () => {
  return (
    <div className="mainnavbar">
      <a aria-label="Link to home page" href="/home">
        <img id="navbarLogo" src={logo78} alt="78th Band logo" />
      </a>
      <div className="horizontalNav">
        <ul className="desktopMenu">
          <li className="li">
            <a aria-label="Link to home page" href="/home">
              Home
            </a>
          </li>
          <li className="li">
            <a aria-label="Link to History page" href="/history">
              History
            </a>
          </li>
          <li className="li">
            <a aria-label="Link to Meet the Band apge" href="/meettheband">
              Meet the Band
            </a>
          </li>
          <li className="li">
            <a aria-label="Link to Ensembles page" href="/ensembles">
              Ensembles
            </a>
          </li>
          <li className="li">
            <a aria-label="Link to Watch & Listen/Media page" href="/media">
              Watch & Listen
            </a>
          </li>
          <li className="li">
            <a aria-label="Link to Audition/Jobs page" href="/jobs">
              Audition
            </a>
          </li>
          <li className="li">
            <a aria-label="Link to Contact page" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="dropdown">
        <img src={dropdown} alt="dropdown button" />
        <div className="dropdown-content">
          <ul className="menu">
            <li className="li">
              <a aria-label="Link to home page" href="/home">
                Home
              </a>
            </li>
            <li className="li">
              <a aria-label="Link to History page" href="/history">
                History
              </a>
            </li>
            <li className="li">
              <a aria-label="Link to Meet the Band page" href="/meettheband">
                Meet the Band
              </a>
            </li>
            <li className="li">
              <a aria-label="Link to Ensembles page" href="/ensembles">
                Ensembles
              </a>
            </li>
            <li className="li">
              <a aria-label="Link to Watch & Listen/Media page" href="/media">
                Watch & Listen
              </a>
            </li>
            <li className="li">
              <a aria-label="Link to Auditions/Jobs page" href="/jobs">
                Audition
              </a>
            </li>
            <li className="li">
              <a aria-label="Link to Contact page" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a aria-label="Link to home page" href="/" id="navbarLogoMobileA">
        <img id="navbarLogoMobile" src={logo78} alt="78th Band logo" />
      </a>
    </div>
  );
};

export default Navbar;
