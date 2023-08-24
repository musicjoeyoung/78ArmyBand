import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import logo78 from "./images/band78.webp";
import dropdown from "./images/dropdown.png";
import Home from "./Home.js";
import History from "./History";
import MeetTheBand from "./MeetTheBand/MeetTheBand";
import Ensembles from "./Ensembles/Ensembles";
import Media from "./Media/Media";
import Jobs from "./Jobs/Jobs";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <div className="mainnavbar">
          <a aria-label="Link to home page" href="/home">
            <img id="navbarLogo" src={logo78} alt="78th Band logo" />
          </a>
          <nav className="horizontalNav">
            <ul className="desktopMenu">
              {/*       <NavLink className="li" role="none">
                <a aria-label="Link to home page" role="menuItem" href="/home">
                  Home
                </a>
              </NavLink> */}
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Home
              </NavLink>
              <NavLink
                to="/history"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                History
              </NavLink>
              <NavLink
                to="/meettheband"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Meet the Band
              </NavLink>
              <NavLink
                to="/ensembles"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Ensembles
              </NavLink>
              <NavLink
                to="/media"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Watch & Listen
              </NavLink>
              <NavLink
                to="/jobs"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Auditions
              </NavLink>
              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Contact
              </NavLink>
            </ul>
          </nav>

          <div className="dropdown">
            <img src={dropdown} alt="dropdown button" />
            <nav className="dropdown-content">
              <ul className="menu">
                <li className="li" role="none">
                  <a
                    aria-label="Link to home page"
                    role="menuItem"
                    href="/home"
                  >
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
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/meettheband" element={<MeetTheBand />} />
          <Route path="/history" element={<History />} />
          <Route path="/ensembles" element={<Ensembles />} />
          <Route path="/media" element={<Media />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
