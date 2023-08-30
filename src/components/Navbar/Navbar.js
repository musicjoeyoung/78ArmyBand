import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import logo78 from "../../assets/images/band78.webp";
import dropdown from "/Users/musicjoeyoung/Desktop/Coding/Army/78armyband/src/assets/images/dropdown.png";
import Home from "../../pages/Home/Home";
import History from "../../pages/History/History";
import MeetTheBand from "../../pages/MeetTheBand/MeetTheBand";
import Ensembles from "../../pages/Ensembles/Ensembles";
import Media from "../../pages/Media/Media";
import Jobs from "../../pages/Jobs/Jobs";
import Contact from "../../pages/Contact/Contact.js";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <div className="mainnavbar">
          <a aria-label="Link to home page" href="/home" className="mainnavbar__a">
            <img className="mainnavbar__logo" src={logo78} alt="78th Band logo" />
          </a>
          <nav className="horizontalNav">
            <ul className="desktopMenu">

              <NavLink
              className="desktopMenu__a"
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#ffcc01" : "white",
                })}
              >
                Home
              </NavLink>
              <NavLink
              className="desktopMenu__a"
                to="/history"
                style={({ isActive }) => ({
                  color: isActive ? "#ffcc01" : "white",
                })}
              >
                History
              </NavLink>
              <NavLink
              className="desktopMenu__a"
                to="/meettheband"
                style={({ isActive }) => ({
                  color: isActive ? "#ffcc01" : "white",
                })}
              >
                Meet the Band
              </NavLink>
              <NavLink
              className="desktopMenu__a"
                to="/ensembles"
                style={({ isActive }) => ({
                  color: isActive ? "#ffcc01" : "white",
                })}
              >
                Ensembles
              </NavLink>
              <NavLink
              className="desktopMenu__a"
                to="/media"
                style={({ isActive }) => ({
                  color: isActive ? "#ffcc01" : "white",
                })}
              >
                Watch & Listen
              </NavLink>
              <NavLink
              className="desktopMenu__a"
                to="/jobs"
                style={({ isActive }) => ({
                  color: isActive ? "#ffcc01" : "white",
                })}
              >
                Auditions
              </NavLink>
              <NavLink
              className="desktopMenu__a"
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "#ffcc01" : "white",
                })}
              >
                Contact
              </NavLink>
            </ul>
          </nav>

          <div className="dropdown">
            <img src={dropdown} alt="dropdown button" className="dropdown__img"/>
            <nav className="dropdown__nav">
              <ul className="dropdown__menu">
                <li className="dropdown__li" role="none">
                  <a
                    className="dropdown__a"
                    aria-label="Link to home page"
                    role="menuItem"
                    href="/home"
                  >
                    Home
                  </a>
                </li>
                <li className="dropdown__li" role="none">
                  <a
                    className="dropdown__a"
                    aria-label="Link to History page"
                    role="menuItem"
                    href="/history"
                  >
                    History
                  </a>
                </li>
                <li className="dropdown__li" role="none">
                  <a
                    className="dropdown__a"
                    aria-label="Link to Meet the Band page"
                    role="menuItem"
                    href="/meettheband"
                  >
                    Meet the Band
                  </a>
                </li>
                <li className="dropdown__li" role="none">
                  <a
                    className="dropdown__a"
                    aria-label="Link to Ensembles page"
                    role="menuItem"
                    href="/ensembles"
                  >
                    Ensembles
                  </a>
                </li>
                <li className="dropdown__li" role="none">
                  <a
                    className="dropdown__a"
                    aria-label="Link to Watch & Listen/Media page"
                    role="menuItem"
                    href="/media"
                  >
                    Watch & Listen
                  </a>
                </li>
                <li className="dropdown__li" role="none">
                  <a
                    className="dropdown__a"
                    aria-label="Link to Auditions/Jobs page"
                    role="menuItem"
                    href="/jobs"
                  >
                    Audition
                  </a>
                </li>
                <li className="dropdown__li" role="none">
                  <a
                    className="dropdown__a"
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
            <img className="navbarLogoMobile" src={logo78} alt="78th Band logo" />
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
