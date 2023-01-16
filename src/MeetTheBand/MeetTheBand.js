import React, { useState } from "react";
import Navbar from "../Navbar";
import { staff } from "./staffArray.js";
import NavComponent from "./NavComponent";
import Profiles from "./Profiles";

const MeetTheBand = () => {
  const [section, setSection] = useState("Command Team");
  const updateSection = (event) => setSection(event.target.innerText);

  const profiles = staff.filter((staff) => staff.section === section);

  //console.log({ section });

  return (
    <div>
      <Navbar />
      <h1>Meet the Band</h1>
      {/*   <div className="about-page-bg-text">
      </div> */}
      {/*  <div className="about-page-pic-and-text">
        <div className="about-page-pic">
          <img src={armyband} className="about-page-bg-image" alt="" />
        </div>
      </div> */}
      <div className="individualEnsemble">
        <NavComponent setSection={updateSection}></NavComponent>
        <div>
          <h2>{section}</h2>
          <Profiles staff={profiles} />
        </div>
      </div>
    </div>
  );
};

export default MeetTheBand;
