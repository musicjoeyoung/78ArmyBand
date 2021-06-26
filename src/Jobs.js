import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import armyband from "./images/78armybandrrecording.jpeg";
import MyApp from "./JobsComponent/InstrumentPDFs.js";

export class Jobs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="jobs-page-pic-and-text">
          <div className="jobs-page-pic">
            <img src={armyband} className="jobs-page-bg-image" alt="" />
          </div>
          <div className="jobs-page-bg-text">
            <h1>jobs</h1>
          </div>
        </div>
        <div className="jobs-page-description">
          <h2>The role of an Army Musician</h2>
          <p>
            <strong>Job Description: </strong> Sed biodiesel lo-fi do next level
            dolore meditation woke vexillologist pitchfork vice flexitarian
            iceland. Fam banjo yr selfies kombucha brunch trust fund distillery
            seitan man braid ramps authentic tilde enim. Echo park bitters
            offal, locavore viral tousled swag art party williamsburg schlitz
            palo santo. Cray art party chia gluten-free meditation post-ironic
            qui echo park twee.
          </p>
          <p>
            <strong>Qualifications: </strong> Sed biodiesel lo-fi do next level
            dolore meditation woke vexillologist pitchfork vice flexitarian
            iceland. Fam banjo yr selfies kombucha brunch trust fund distillery
            seitan man braid ramps authentic tilde enim. Echo park bitters
            offal, locavore viral tousled swag art party williamsburg schlitz
            palo santo. Cray art party chia gluten-free meditation post-ironic
            qui echo park twee.
          </p>
          <p>
            <strong>Salary & Benefits: </strong> Sed biodiesel lo-fi do next
            level dolore meditation woke vexillologist pitchfork vice
            flexitarian iceland. Fam banjo yr selfies kombucha brunch trust fund
            distillery seitan man braid ramps authentic tilde enim. Echo park
            bitters offal, locavore viral tousled swag art party williamsburg
            schlitz palo santo. Cray art party chia gluten-free meditation
            post-ironic qui echo park twee.
          </p>
          <p>
            <strong>Audition: </strong> Sed biodiesel lo-fi do next level dolore
            meditation woke vexillologist pitchfork vice flexitarian iceland.
            Fam banjo yr selfies kombucha brunch trust fund distillery seitan
            man braid ramps authentic tilde enim. Echo park bitters offal,
            locavore viral tousled swag art party williamsburg schlitz palo
            santo. Cray art party chia gluten-free meditation post-ironic qui
            echo park twee.
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
        <div className="audition-dropdown">
          Audition Dropdown Menu{" "}
          <label htmlFor="instruments">Instruments:</label>
          <select>
            <option disabled selected value>
              {" "}
              -- select instrument --{" "}
            </option>
            <optgroup label="Woodwinds">
              <option value="flute">Flute</option>
              <option value="clarinet">Clarinet</option>
              <option value="oboe">Oboe</option>
              <option value="bassoon">Bassoon</option>
              <option value="saxophone">Saxophone</option>
            </optgroup>
            <optgroup label="Brass">
              <option value="trumpet">Trumpet</option>
              <option value="frenchHorn">French Horn</option>
              <option value="trombone">Trombone</option>
              <option value="euphonium">Euphonium</option>
              <option value="tuba">Tuba </option>
            </optgroup>
            <optgroup label="Strings">
              <option value="guitar">Electric Guitar</option>
              <option value="bass">Bass Guitar/String Bass</option>
            </optgroup>
            <optgroup label="-----">-----</optgroup>
            <option value="percussion">Percussion</option>
            <option value="pianoKeyboard">Piano/Keyboard</option>
            <option value="vocals">Vocals</option>
            <option value="audioEngineer">Audio Engineer</option>
          </select>
        </div>
        <div className="instrument-PDF">
          Instrument PDFs
          <MyApp />
        </div>
        <div className="general-audition-info">General Audition Info</div>
        <div className="armyMusicCareers">Army Music Careers</div>
        <div className="armyCareers">Army Careers</div>
        <Footer />
      </div>
    );
  }
}

export default Jobs;
