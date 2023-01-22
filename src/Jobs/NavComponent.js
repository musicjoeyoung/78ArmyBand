import React from "react";
import dropdownImg from "../images/dropdown.png";

//use this for the home page; dropdown links take user section on the Jobs page and NOT directly
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
          <a href="./jobs#flute" className="instrumentsJobsATags">
            Flute
          </a>
          <a href="./jobs#oboe" className="instrumentsJobsATags">
            Oboe
          </a>
          <a href="./jobs#clarinet" className="instrumentsJobsATags">
            Clarinet
          </a>
          <a href="./jobs#saxophone" className="instrumentsJobsATags">
            Saxophone
          </a>
          <a href="./jobs#horn" className="instrumentsJobsATags">
            Horn
          </a>
          <a href="./jobs#trumpet" className="instrumentsJobsATags">
            Trumpet
          </a>
          <a href="./jobs#trombone" className="instrumentsJobsATags">
            Trombone
          </a>
          <a href="./jobs#euphonium" className="instrumentsJobsATags">
            Euphonium
          </a>
          <a href="./jobs#tuba" className="instrumentsJobsATags">
            Tuba
          </a>
          <a href="./jobs#percussion" className="instrumentsJobsATags">
            Percussion
          </a>
          <a href="./jobs#keybaord" className="instrumentsJobsATags">
            KeyBoard/Piano
          </a>
          <a href="./jobs#guitar" className="instrumentsJobsATags">
            Electric Guitar
          </a>
          <a href="./jobs#bass" className="instrumentsJobsATags">
            Electric Bass
          </a>
          <a href="./jobs#vocals" className="instrumentsJobsATags">
            Vocals
          </a>
          <a href="./jobs#engineer" className="instrumentsJobsATags">
            Audio Engineer
          </a>
        </div>
      </div>
    </div>
  );
}
