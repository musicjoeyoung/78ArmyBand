import React, { useState } from "react";
import { ensembles } from "../../assets/ensembles/ensemblesArray";
import EnsembleNav from "../../components/EnsembleNav/EnsembleNav.js";
import EnsemblesProfiles from "../../components/EnsemblesProfiles/EnsemblesProfiles";

const Ensembles = () => {
  const [name, setName] = useState("Concert Band");
  const updateName = (event) => setName(event.target.innerText);

  const profiles = ensembles.filter((ensembles) => ensembles.name === name);

  //console.log({ name });
  return (
    <div className="parentDiv">
      <h1 className="mobileH1">Ensembles</h1>
      <p id="ensemblePageDescriptionMobile">
        The 78th Army Band's many ensembles perform throughout the larger
        tri-state area for all communities. They play a vital role in the Army
        by providing musical support for various troops, units and branches,
        entertaining civilians, and serving as musical ambassadors of the Army.
      </p>
      <EnsembleNav setName={updateName} />
      <div className="individualEnsemble">
        <EnsemblesProfiles ensembles={profiles} />
      </div>
    </div>
  );
};

export default Ensembles;
