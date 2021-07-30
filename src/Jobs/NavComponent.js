import React from "react";
import dropdownImg from "../images/dropdown.png";
import flute from "../Jobs/AMPA Materials/9B.pdf";

//use this for the home page; dropdown links take user ection on the Jobs page and NOT directly
export default function NavComponent() {
  return (
    <div className="audition-dropdown">
      <label htmlFor="instruments">
        <h4>Instruments:</h4>
      </label>
      <br />
      <div className="dropdown">
        <img className="dropbtn" src={dropdownImg} alt="" />
        <div className="navbar">
          <a href="./Jobs/Jobs.js#flute">Flute information</a>
          <a href="./Jobs/Jobs.js#oboe">Oboe</a>
          <a href="./Jobs/Jobs.js#clarinet">Clarinet</a>
          <a href="./Jobs/Jobs.js#bassoon">Bassoon</a>
          <a id="instrumentPDFs">Events</a>
          <a id="instrumentPDFs">Media</a>
          <a id="instrumentPDFs">Career Opportunities</a>
          <a id="instrumentPDFs">Contact us</a>
        </div>
      </div>
      {/* <select>
        <option //disabled  defaultValue value="selectInstrument">
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
      </select> */}
    </div>
  );
}
