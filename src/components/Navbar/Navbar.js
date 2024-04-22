import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo78 from "../../assets/images/78th-99th.jpg"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__hamburger" onClick={toggleMobileMenu}>
        <div className="navbar__hamburger--line"></div>
        <div className="navbar__hamburger--line"></div>
        <div className="navbar__hamburger--line"></div>
      </div>

      <div className={`navbar__links ${isMobileMenuOpen ? "navbar__links--open" : ""}`}>
        <a href="/"><img className="navbar__logo" src={logo78} alt="78th Band logo" /></a>
        <NavLink className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"} to="/" onClick={toggleMobileMenu}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"} to="/history" onClick={toggleMobileMenu}>History</NavLink>
        <NavLink className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"} to="/meettheband" onClick={toggleMobileMenu}>Meet The Band</NavLink>
        <NavLink className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"} to="/ensembles" onClick={toggleMobileMenu}>Ensembles</NavLink>
        <NavLink className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"} to="/media" onClick={toggleMobileMenu}>Media</NavLink>
        <NavLink className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"} to="/jobs" onClick={toggleMobileMenu}>Jobs</NavLink>
        <NavLink className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"} to="/contact" onClick={toggleMobileMenu}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
