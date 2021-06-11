import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Profiles from "./Profiles";
import NavComponent from "./NavComponent";
import { staff } from "./staffArray.js";

function About() {
  const [section, setSection] = useState("Command Team");
  const updateSection = (event) => setSection(event.target.innerText);

  const profiles = staff.filter((staff) => staff.section === section);

  //console.log({ section });

  return (
    <div>
      <Navbar />
      <div className="meetTheBand">
        <h1>Meet the Band!</h1>
        <NavComponent setSection={updateSection}></NavComponent>
        <h2>{section}</h2>
        <Profiles staff={profiles} />
      </div>
      <Footer />
    </div>
  );
}

export default About;
