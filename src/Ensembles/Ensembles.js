import React, { useState } from "react";
import { ensembles } from "./ensemblesArray";
import NavComponent from "../Ensembles/NavComponent.js";
import EnsemblesProfiles from "./EnsemblesProfiles";

const Ensembles = () => {
  const [name, setName] = useState("Concert Band");
  const updateName = (event) => setName(event.target.innerText);

  const profiles = ensembles.filter((ensembles) => ensembles.name === name);

  console.log({ name });
  return (
    <div>
      <h1 className="mobileH1">Ensembles</h1>
      <div className="individualEnsemble">
        <NavComponent setName={updateName} />
        <EnsemblesProfiles ensembles={profiles} />
      </div>
    </div>
  );
};

export default Ensembles;
