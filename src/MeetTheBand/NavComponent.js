import React from "react";

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
  );
};

export default NavComponent;
