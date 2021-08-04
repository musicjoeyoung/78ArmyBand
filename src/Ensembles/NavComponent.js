import React from "react";

export default function NavComponent({ setName }) {
  return (
    <div>
      <div className="ensemblesNavComp">
        <button
          className="ensembleNameNavComp"
          onMouseOver={setName}
          id="ConcertBand"
        >
          Concert Band
        </button>
        <button
          className="ensembleNameNavComp"
          onMouseOver={setName}
          id="MarchingCeremonialBand"
        >
          Marching/Ceremonial Band
        </button>
        <button
          className="ensembleNameNavComp"
          onMouseOver={setName}
          id="BrassQuintet"
        >
          Brass Quintet
        </button>

        <button
          className="ensembleNameNavComp"
          onMouseOver={setName}
          id="Checkmate"
        >
          Checkmate
        </button>
        <button
          className="ensembleNameNavComp"
          onMouseOver={setName}
          id="FortDixielandBrassBand"
        >
          Fort Dix-ieland Brass Band
        </button>
        <button
          className="ensembleNameNavComp"
          onMouseOver={setName}
          id="FortDixielandBrassBand"
        >
          Lady Liberty
        </button>
        <button
          className="ensembleNameNavComp"
          onMouseOver={setName}
          id="FortDixielandBrassBand"
        >
          Liberty Vibes
        </button>
      </div>
    </div>
  );
}
