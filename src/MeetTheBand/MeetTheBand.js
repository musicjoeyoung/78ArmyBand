import React, { useState } from "react";
import Navbar from "../Navbar";
import Profiles from "./Profiles";
import NavComponent from "./NavComponent";
import { staff } from "./staffArray.js";
import armyband from "../images/78armybandparade.jpeg";

const MeetTheBand = () => {
  const [section, setSection] = useState("Command Team");
  const updateSection = (event) => setSection(event.target.innerText);

  const profiles = staff.filter((staff) => staff.section === section);

  console.log({ section });

  return (
    <div>
      <Navbar />
      <div className="about-page-bg-text">
        <h1>Meet the Band</h1>
        <p id="about-page-pText">Meet the members of band.</p>
      </div>
      <div className="about-page-pic-and-text">
        <div className="about-page-pic">
          <img src={armyband} className="about-page-bg-image" alt="" />
        </div>
      </div>
      <div className="meetTheBand">
        <NavComponent setSection={updateSection}></NavComponent>
        <h2>{section}</h2>
        <Profiles staff={profiles} />
      </div>
    </div>
  );
};

export default MeetTheBand;
