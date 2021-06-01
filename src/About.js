import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import armyband3 from "./images/armyband3.jpeg";

export class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <img src={armyband3} className="about-page-bg-image" alt="" />

        <div className="about-page-bg-text">
          <h1>About</h1>
          <p id="about-page-pText">The history of the 78th Army Band...</p>
        </div>
        <div className="history">
          <h2>History</h2>
          <p>1-2 sentences here</p>
          <div className="meetTheBand">
            <h2>Meet the Band</h2>
            Include dropdown menu of sections. Name that changes via Redux
            ("Command Staff", "Brass", "Percussion", etc.)
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
