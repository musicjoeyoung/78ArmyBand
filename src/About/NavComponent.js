import React from "react";
import dropdownImg from "../images/dropdown.png";

export default function NavComponent({ setSection }) {
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
        </div>
      </div>
    </div>
  );
}
