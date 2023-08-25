import React, { useState } from "react";
import { staff } from "../../assets/meetTheBand/staffArray.js";
import NavComponent from "../../components/NavComponent/NavComponent.js";
import Profiles from "../../components/Profiles/Profiles.js";

const MeetTheBand = () => {
  const [section, setSection] = useState("Command Team");
  const updateSection = (event) => setSection(event.target.innerText);

  const profiles = staff.filter((staff) => staff.section === section);

  //console.log({ section });

  return (
    <div className="parentDiv">
      <h1 className="mobileH1">Meet the Band</h1>
      <img
        src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1674497589/78armybandparade-min_1_25_keiu3b.jpg"
        alt="marching band"
        id="mobileImg"
      />
      <NavComponent setSection={updateSection}></NavComponent>
      <div className="individualEnsemble">
        <div className="profileContainer">
          <h1 className="desktopH1">Meet the Band</h1>
          <img
            src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1674497589/78armybandparade-min_1_25_keiu3b.jpg"
            alt="marching band"
            id="desktopImg"
          />

          <h2>{section}</h2>
          <Profiles staff={profiles} />
        </div>
      </div>
    </div>
  );
};

export default MeetTheBand;
