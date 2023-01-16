import React from "react";
//import dropdownImg from "../images/dropdown.png";

const NavComponent = ({ setSection }) => {
  return (
    <div>
      <div className="ensemblesNavComp">
        <button className="ensembleNameNavComp" onMouseOver={setSection}>
          Command Team
        </button>
        <button className="ensembleNameNavComp" onMouseOver={setSection}>
          Brass
        </button>
        <button className="ensembleNameNavComp" onMouseOver={setSection}>
          Woodwinds
        </button>
        <button className="ensembleNameNavComp" onMouseOver={setSection}>
          Percussion
        </button>
        <button className="ensembleNameNavComp" onMouseOver={setSection}>
          Piano
        </button>
        <button className="ensembleNameNavComp" onMouseOver={setSection}>
          Vocals
        </button>
        <button className="ensembleNameNavComp" onMouseOver={setSection}>
          Bass Guitar
        </button>
      </div>
    </div>

    /*     <div className="dropdownDiv2">
      <div className="dropdown2">
        <img className="dropbtn2" src={dropdownImg} alt="" />
        <div className="navbar2">
          
        </div>
      </div>
    </div> */
  );
};

export default NavComponent;

{
  /* <div className="sections">
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
      <li onClick={setSection} id="navbarLinks">
        Bass Guitar
      </li>
    </div> */
}
