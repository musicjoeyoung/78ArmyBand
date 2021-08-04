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
          <h1>About Us</h1>
          <p id="about-page-pText">
            Meet the members of band and learn about the history of the unit.
          </p>
        </div>
      </div>
      <div className="meetTheBand">
        <a href="#history">→ go to: History</a>
        <h1 id="meetTheBand">Meet the Band</h1>
        <NavComponent setSection={updateSection}></NavComponent>
        <h2>{section}</h2>
        <Profiles staff={profiles} />
      </div>
      <History />
      <iframe
        title="78th Army Band History"
        src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1tXSzTlnmS1IBki00cXKA854YxjnEQtxRM0vXrq1cKnY&font=Default&lang=en&initial_zoom=2&height=650"
        width="100%"
        height="650"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        frameBorder="0"
      ></iframe>
      <Footer />
    </div>
  );
}

export default About;
