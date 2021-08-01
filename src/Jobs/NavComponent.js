import React from "react";
import dropdownImg from "../images/dropdown.png";

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
          <a href="./Jobs/Jobs.js#saxophone">Saxophone</a>
          <a href="./Jobs/Jobs.js#horn">Horn</a>
          <a href="./Jobs/Jobs.js#trumpet">Trumpet</a>
          <a href="./Jobs/Jobs.js#trombone">Trombone</a>
          <a href="./Jobs/Jobs.js#euphonium">Euphonium</a>
          <a href="./Jobs/Jobs.js#tuba">Tuba</a>
          <a href="./Jobs/Jobs.js#percussion">Percussion</a>
          <a href="./Jobs/Jobs.js#keybaord">KeyBoard/Piano</a>
          <a href="./Jobs/Jobs.js#guitar">Electric Guitar</a>
          <a href="./Jobs/Jobs.js#bass">Electric Bass</a>
          <a href="./Jobs/Jobs.js#vocals">Vocals</a>
          <a href="./Jobs/Jobs.js#engineer">Audio Engineer</a>
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
