import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Profiles from "./Profiles";
import NavComponent from "./NavComponent";
import { staff } from "./staffArray.js";
import armyband from "../images/78armybandparade.jpeg";
import History from "./History";

function About() {
  const [section, setSection] = useState("Command Team");
  const updateSection = (event) => setSection(event.target.innerText);

  const profiles = staff.filter((staff) => staff.section === section);

  console.log({ section });

  return (
    <div>
      <Navbar />
      <div className="about-page-pic-and-text">
        <div className="about-page-pic">
          <img src={armyband} className="about-page-bg-image" alt="" />
        </div>
        <div className="about-page-bg-text">
          <h1>About the band</h1>
          <p id="about-page-pText">The 78th Army Band...</p>
        </div>
      </div>
      <History />
      <div className="meetTheBand">
        <h1 id="meetTheBand">Meet the Band!</h1>
        <NavComponent setSection={updateSection}></NavComponent>
        <h2>{section}</h2>
        <Profiles staff={profiles} />
      </div>
      <Footer />
    </div>
  );
}

export default About;
