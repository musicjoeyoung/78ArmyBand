import React, { Component } from "react";
import armyband7 from "../images/armyband7.jpeg";

export class AboutComponent extends Component {
  render() {
    return (
      <div className="about">
        <h3 id="mainDivTitleAbout">About</h3>
        <div className="aboutChildContainer">
          <div className="aboutimage">
            <img src={armyband7} alt="" id="armyband7" />
          </div>
          <div className="aboutcarousel">
            <h3 id="historylink">History</h3>
            <h3 id="meetthebandlink">Meet the Band</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutComponent;
