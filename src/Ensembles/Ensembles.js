import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import armyband from "../images/78armybandgreenwayrockin.jpeg";
import { ensembles } from "./ensemblesArray";
import EnsemblesProfiles from "./EnsemblesProfiles";
import NavComponent from "../Ensembles/NavComponent.js";

function Ensembles() {
  const [name, setName] = useState("Concert Band");
  const updateName = (event) => setName(event.target.innerText);

  const profiles = ensembles.filter((ensembles) => ensembles.name === name);

  console.log({ name });
  return (
    <div>
      <Navbar />
      <div className="ensembles-page-pic-and-text">
        <div className="ensembles-page-pic">
          <img src={armyband} className="ensembles-page-bg-image" alt="" />
        </div>
        <div className="ensembles-page-bg-text">
          <h1>Ensembles</h1>
          <p id="ensembles-page-pText">
            The ensembles of the 78th Army Band...
          </p>
        </div>
      </div>
      <div className="ensemblesList">
        <h2>Ensembles</h2>
        <p>1-2 sentences here</p>
        <div className="individualEnsemble">
          <NavComponent setName={updateName} />
          <EnsemblesProfiles ensembles={profiles} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ensembles;
