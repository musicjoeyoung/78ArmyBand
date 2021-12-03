import React from "react";
import dropdownImg from "../images/dropdown.png";

//use this for the home page; dropdown links take user ection on the Jobs page and NOT directly
export default function NavComponent() {
  return (
    <div className="audition-dropdown">
      <label htmlFor="instruments">
        <h4 id="instrumentsH4">Instruments:</h4>
      </label>
      <br />
      <div className="dropdown">
        <img className="dropbtn" src={dropdownImg} alt="" />
        <div className="navbar">
          <a href="./jobs/#flute" className="instrumentsJobsATags">
            Flute
          </a>
          <a href="./jobs/#oboe" className="instrumentsJobsATags">
            Oboe
          </a>
          <a href="./jobs/#clarinet" className="instrumentsJobsATags">
            Clarinet
          </a>
          <a href="./jobs/#saxophone" className="instrumentsJobsATags">
            Saxophone
          </a>
          <a href="./jobs/#horn" className="instrumentsJobsATags">
            Horn
          </a>
          <a href="./jobs/#trumpet" className="instrumentsJobsATags">
            Trumpet
          </a>
          <a href="./jobs/#trombone" className="instrumentsJobsATags">
            Trombone
          </a>
          <a href="./jobs/#euphonium" className="instrumentsJobsATags">
            Euphonium
          </a>
          <a href="./jobs/#tuba" className="instrumentsJobsATags">
            Tuba
          </a>
          <a href="./jobs/#percussion" className="instrumentsJobsATags">
            Percussion
          </a>
          <a href="./jobs/#keybaord" className="instrumentsJobsATags">
            KeyBoard/Piano
          </a>
          <a href="./jobs/#guitar" className="instrumentsJobsATags">
            Electric Guitar
          </a>
          <a href="./jobs/#bass" className="instrumentsJobsATags">
            Electric Bass
          </a>
          <a href="./jobs/#vocals" className="instrumentsJobsATags">
            Vocals
          </a>
          <a href="./jobs/#engineer" className="instrumentsJobsATags">
            Audio Engineer
          </a>
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
