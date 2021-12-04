import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import armyband from "../images/78armybandgreenwayrockin.jpeg";
import { ensembles } from "./ensemblesArray";
import EnsemblesProfiles from "./EnsemblesProfiles";
import NavComponent from "../Ensembles/NavComponent.js";

const Ensembles = () => {
  const [name, setName] = useState("Concert Band");
  const updateName = (event) => setName(event.target.innerText);

  const profiles = ensembles.filter((ensembles) => ensembles.name === name);

  console.log({ name });
  return (
    <div>
      <Navbar />
      <div className="ensembles-page-bg-text">
        <h1>Ensembles</h1>
        <p id="ensembles-page-pText">The ensembles of the 78th Army Band...</p>
      </div>
      <div className="ensembles-page-pic-and-text">
        <div className="ensembles-page-pic">
          <img src={armyband} className="ensembles-page-bg-image" alt="" />
        </div>
      </div>
      <div className="ensemblesList">
        <p id="ensemblePageDescription">
          The 78th Army Band's many ensembles perform throughout the larger
          tri-state area for all communities. They play a vital role in the Army
          by providing musical support for various troops, units, and branches,
          entertaining civilians, and serving as musical ambassadors of the
          Army.
        </p>
        <div className="individualEnsemble">
          <NavComponent setName={updateName} />
          <EnsemblesProfiles ensembles={profiles} />
        </div>
      </div>
    </div>
  );
};

export default Ensembles;
