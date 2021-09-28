import React from "react";
import ConcertBand from "../images/78ConcertBand.jpeg";

export const EnsemblesComponent = () => {
  return (
    <div className="ensembles">
      <h3 id="mainDivTitleEnsemble">
        <a href="./Ensembles/Ensembles.js" id="mainDivTitleEnsemble">
          Ensembles
        </a>
      </h3>
      <div className="ensemblesChildContainer">
        <div className="ensemblesText">
          <p id="ensembles¶">
            The 78th Army Band provides musical support for the local community,
            leadership of the United States, and connects the Army to the
            American people. <br />
            <a id="ensembleslinkReadMore" href="../Ensembles">
              Learn more...
            </a>
          </p>
        </div>
        <div className="ensembleImageContainer">
          <img id="ensembleImage" alt="" src={ConcertBand} />
        </div>
      </div>
    </div>
  );
};

export default EnsemblesComponent;
