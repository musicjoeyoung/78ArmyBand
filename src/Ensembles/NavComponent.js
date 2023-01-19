import React from "react";

const NavComponent = ({ setName }) => {
  return (
    <div>
      <div className="ensemblesNavComp">
        <button
          className="ensembleNameNavComp"
          onClick={setName}
          id="ConcertBand"
        >
          Concert Band
        </button>
        <button
          className="ensembleNameNavComp"
          onClick={setName}
          id="MarchingCeremonialBand"
        >
          Marching/Ceremonial Band
        </button>
        <button
          className="ensembleNameNavComp"
          onClick={setName}
          id="BrassQuintet"
        >
          Brass Quintet
        </button>

        <button
          className="ensembleNameNavComp"
          onClick={setName}
          id="Checkmate"
        >
          Checkmate
        </button>
        <button
          className="ensembleNameNavComp"
          onClick={setName}
          id="FortDixielandBrassBand"
        >
          Fort Dix-ieland Brass Band
        </button>
        <button
          className="ensembleNameNavComp"
          onClick={setName}
          id="FortDixielandBrassBand"
        >
          Lady Liberty
        </button>
        <button
          className="ensembleNameNavComp"
          onClick={setName}
          id="FortDixielandBrassBand"
        >
          Liberty Vibes
        </button>
      </div>
    </div>
  );
};

export default NavComponent;
