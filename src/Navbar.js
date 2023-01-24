import React from "react";
import logo78 from "./images/band78.webp";
import dropdown from "./images/dropdown.png";

const Navbar = () => {
  return (
    <div className="mainnavbar">
      <a aria-label="Link to home page" href="/home">
        <img id="navbarLogo" src={logo78} alt="78th Band logo" />
      </a>
      <nav className="horizontalNav">
        <ul className="desktopMenu">
          <li className="li" role="none">
            <a aria-label="Link to home page" role="menuItem" href="/home">
              Home
            </a>
          </li>
          <li className="li" role="none">
            <a
              aria-label="Link to History page"
              role="menuItem"
              href="/history"
            >
              History
            </a>
          </li>
          <li className="li" role="none">
            <a
              aria-label="Link to Meet the Band apge"
              role="menuItem"
              href="/meettheband"
            >
              Meet the Band
            </a>
          </li>
          <li className="li" role="none">
            <a
              aria-label="Link to Ensembles page"
              role="menuItem"
              href="/ensembles"
            >
              Ensembles
            </a>
          </li>
          <li className="li" role="none">
            <a
              aria-label="Link to Watch & Listen/Media page"
              role="menuItem"
              href="/media"
            >
              Watch & Listen
            </a>
          </li>
          <li className="li" role="none">
            <a
              aria-label="Link to Audition/Jobs page"
              role="menuItem"
              href="/jobs"
            >
              Audition
            </a>
          </li>
          <li className="li" role="none">
            <a
              aria-label="Link to Contact page"
              role="menuItem"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="dropdown">
        <img src={dropdown} alt="dropdown button" />
        <nav className="dropdown-content">
          <ul className="menu">
            <li className="li" role="none">
              <a aria-label="Link to home page" role="menuItem" href="/home">
                Home
              </a>
            </li>
            <li className="li" role="none">
              <a
                aria-label="Link to History page"
                role="menuItem"
                href="/history"
              >
                History
              </a>
            </li>
            <li className="li" role="none">
              <a
                aria-label="Link to Meet the Band page"
                role="menuItem"
                href="/meettheband"
              >
                Meet the Band
              </a>
            </li>
            <li className="li" role="none">
              <a
                aria-label="Link to Ensembles page"
                role="menuItem"
                href="/ensembles"
              >
                Ensembles
              </a>
            </li>
            <li className="li" role="none">
              <a
                aria-label="Link to Watch & Listen/Media page"
                role="menuItem"
                href="/media"
              >
                Watch & Listen
              </a>
            </li>
            <li className="li" role="none">
              <a
                aria-label="Link to Auditions/Jobs page"
                role="menuItem"
                href="/jobs"
              >
                Audition
              </a>
            </li>
            <li className="li" role="none">
              <a
                aria-label="Link to Contact page"
                role="menuItem"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <a aria-label="Link to home page" href="/" id="navbarLogoMobileA">
        <img id="navbarLogoMobile" src={logo78} alt="78th Band logo" />
      </a>
    </div>
  );
};

export default Navbar;
