import React, { Component } from "react";
import HomeCarousel from "./HomeCarousel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import armyband7 from "./images/armyband7.jpeg";

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <HomeCarousel />
        <br />
        <br />
        <br />
        <div className="signuplink">
          <h3 id="signuptext">sign up for our newsletter</h3>
        </div>
        <br />
        <br />
        <br />
        <div className="about">
          <h3>About</h3>
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
        <br />
        <br />
        <br />{" "}
        <div className="ensembles">
          <h3>Ensembles</h3>
          <div className="ensembleChildContainer">
            <div className="ensembleNames">
              <div id="ensembleName">ensemble 2</div>
              <div id="ensembleName">ensemble 3</div>
              <div id="ensembleName">ensemble 4</div>
              <div id="ensembleName">ensemble 5</div>
              <div id="ensembleName">ensemble 6</div>
            </div>
            <div className="ensembleImageContainer">
              <div id="ensembleImage">changing image</div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="events">
          <div>embedded promo video</div>
          <div>events 1</div>
          <div>events 2</div>
          <div>events 3</div>
          <button>request the band</button>
        </div>
        <br />
        <br />
        <br />{" "}
        <div className="media">
          <div>circle videos</div>
          <div>circle pictures</div>
          <div>circle articles</div>
          <div>embedded video</div>
        </div>
        <br />
        <br />
        <br />{" "}
        <div className="jobs">
          <div>
            vacancies
            <div>instrument</div>
            <div>instrument</div>
            <div>instrument</div>
          </div>
          <div>
            Audition info.
            <div>description</div>
            <div>samples</div>
            <div>media resources</div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Home;
