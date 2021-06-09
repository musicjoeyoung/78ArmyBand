import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import armyband3 from "./images/armyband3.jpeg";
import Profile from "./Profile";

export class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="ensembles-page-pic-and-text">
          <div className="ensembles-page-pic">
            <img src={armyband3} className="about-page-bg-image" alt="" />
          </div>
          <div className="about-page-bg-text">
            <h1>About</h1>
            <p id="about-page-pText">The history of the 78th Army Band...</p>
          </div>
        </div>
        <div className="history">
          <h2>History</h2>
          <p>1-2 sentences here</p>
        </div>
        <div id="section">
          <Profile />
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
