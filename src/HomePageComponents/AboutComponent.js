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
            <h3>
              <a id="historylink" href="../About/#history">
                -- History --
              </a>
            </h3>
            <br />
            <h3>
              <a id="meetthebandlink" href="../About/#meetTheBand">
                -- Meet the Band --
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutComponent;
