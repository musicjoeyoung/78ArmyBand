import React from "react";
import dropdownImg from "../images/dropdown.png";

const NavComponent = ({ setSection }) => {
  return (
    <div className="dropdownDiv">
      <div className="dropdown">
        <img className="dropbtn" src={dropdownImg} alt="" />
        <div className="navbar">
          <li onClick={setSection} id="navbarLinks">
            Command Team
          </li>
          <li onClick={setSection} id="navbarLinks">
            Brass
          </li>
          <li onClick={setSection} id="navbarLinks">
            Woodwinds
          </li>
          <li onClick={setSection} id="navbarLinks">
            Percussion
          </li>
          <li onClick={setSection} id="navbarLinks">
            Piano
          </li>
          <li onClick={setSection} id="navbarLinks">
            Vocals
          </li>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;