import React from "react";

const NavComponent = ({ setSection }) => {
  return (
    <div>
      <div className="ensemblesNavComp">
        <button className="ensembleNameNavComp" onClick={setSection}>
          Command Team
        </button>
        <button className="ensembleNameNavComp" onClick={setSection}>
          Brass
        </button>
        <button className="ensembleNameNavComp" onClick={setSection}>
          Woodwinds
        </button>
        <button className="ensembleNameNavComp" onClick={setSection}>
          Percussion
        </button>
        <button className="ensembleNameNavComp" onClick={setSection}>
          Piano
        </button>
        <button className="ensembleNameNavComp" onClick={setSection}>
          Vocals
        </button>
        <button className="ensembleNameNavComp" onClick={setSection}>
          Bass Guitar
        </button>
      </div>
    </div>
  );
};

export default NavComponent;
