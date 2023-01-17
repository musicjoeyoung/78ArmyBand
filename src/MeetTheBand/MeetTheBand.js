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
      <div className="individualEnsemble">
        <h1 className="mobileH1">Meet the Band</h1>
        <NavComponent setSection={updateSection}></NavComponent>
        <div className="profileContainer">
          <h1 className="desktopH1">Meet the Band</h1>
          <h2>{section}</h2>
          <Profiles staff={profiles} />
        </div>
      </div>
    </div>
  );
};

export default MeetTheBand;
