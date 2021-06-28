import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import armyband from "../images/78armybandrrecording.jpeg";
import InstrumentPDFs from "./InstrumentPDFs.js";
import NavComponent from "./NavComponent";

function Jobs() {
  /* const [instrument, setInstrument] = useState("test");
  const updateInstrument = (event) => setInstrument(event.target.innerText);

  console.log({ instrument }); */
  return (
    <div>
      <Navbar />
      <div className="jobs-page-pic-and-text">
        <div className="jobs-page-pic">
          <img src={armyband} className="jobs-page-bg-image" alt="" />
        </div>
        <div className="jobs-page-bg-text">
          <h1>Jobs</h1>
        </div>
      </div>
      <div className="jobs-page-description">
        <h2>The role of an Army Musician</h2>
        <p>
          <strong>Job Description: </strong> Sed biodiesel lo-fi do next level
          dolore meditation woke vexillologist pitchfork vice flexitarian
          iceland. Fam banjo yr selfies kombucha brunch trust fund distillery
          seitan man braid ramps authentic tilde enim. Echo park bitters offal,
          locavore viral tousled swag art party williamsburg schlitz palo santo.
          Cray art party chia gluten-free meditation post-ironic qui echo park
          twee.
        </p>
        <p>
          <strong>Qualifications: </strong> Sed biodiesel lo-fi do next level
          dolore meditation woke vexillologist pitchfork vice flexitarian
          iceland. Fam banjo yr selfies kombucha brunch trust fund distillery
          seitan man braid ramps authentic tilde enim. Echo park bitters offal,
          locavore viral tousled swag art party williamsburg schlitz palo santo.
          Cray art party chia gluten-free meditation post-ironic qui echo park
          twee.
        </p>
        <p>
          <strong>Salary & Benefits: </strong> Sed biodiesel lo-fi do next level
          dolore meditation woke vexillologist pitchfork vice flexitarian
          iceland. Fam banjo yr selfies kombucha brunch trust fund distillery
          seitan man braid ramps authentic tilde enim. Echo park bitters offal,
          locavore viral tousled swag art party williamsburg schlitz palo santo.
          Cray art party chia gluten-free meditation post-ironic qui echo park
          twee.
        </p>
        <p>
          <strong>Audition: </strong> Sed biodiesel lo-fi do next level dolore
          meditation woke vexillologist pitchfork vice flexitarian iceland. Fam
          banjo yr selfies kombucha brunch trust fund distillery seitan man
          braid ramps authentic tilde enim. Echo park bitters offal, locavore
          viral tousled swag art party williamsburg schlitz palo santo. Cray art
          party chia gluten-free meditation post-ironic qui echo park twee.
        </p>

        <p>
          <strong>Who To Contact: </strong> Sed biodiesel
        </p>
      </div>
      <div className="jobs-page-vacancies">
        <h4>Vacancies</h4>
        <div>instrument</div>
        <div>instrument</div>
        <div>instrument</div>
      </div>
      <NavComponent />
      <div className="instrument-PDF">
        Instrument PDFs
        <InstrumentPDFs />
      </div>
      <div className="general-audition-info">General Audition Info</div>
      <div className="armyMusicCareers">Army Music Careers</div>
      <div className="armyCareers">Army Careers</div>
      <Footer />
    </div>
  );
}

export default Jobs;
