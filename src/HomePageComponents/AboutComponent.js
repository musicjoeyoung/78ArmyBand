import React, { Component } from "react";
import armyband7 from "../images/armyband7.jpeg";
import { Fade } from "react-awesome-reveal";

export class AboutComponent extends Component {
  render() {
    return (
      <div className="about">
        <h3 id="mainDivTitleAbout">
          <a href="./About/About.js" id="mainDivTitleAbout">
            About
          </a>
        </h3>
        <div className="aboutChildContainer">
          <div className="aboutimage">
            <img src={armyband7} alt="" id="armyband7" />
          </div>

          <div className="aboutcarousel">
            <Fade direction="up">
              <h3 id="aboutCompLinks">
                <a id="historylink" href="../About/#history">
                  History
                </a>
              </h3>
              <p id="history¶">
                Ipsum lorem ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.{" "}
                <a id="historylink" href="../About/#history">
                  Read more...
                </a>
              </p>
              <br />
              <h3 id="aboutCompLinks">
                <a id="meetthebandlink" href="../About/#meetTheBand">
                  Meet the Band
                </a>
              </h3>
              <p id="history¶">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.{" "}
                <a id="meetthebandlink" href="../About/#meetTheBand">
                  Read more...
                </a>
              </p>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutComponent;
