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
          about
          <div id="abouttitlebox">
            <h2 id="abouttitle">ABOUT</h2>
          </div>
          <div id="aboutimage">
            <img src={armyband7} alt="" id="armyband7" />
          </div>
          <div id="aboutcarousel">
            <h3 id="historylink">History</h3>
            <h3 id="meetthebandlink">Meet the Band</h3>
          </div>
        </div>
        <br />
        <br />
        <br />{" "}
        <div className="ensembles">
          <div>ensemble 1</div>
          <div>ensemble 2</div>
          <div>ensemble 3</div>
          <div>ensemble 4</div>
          <div>ensemble 5</div>
          <div>ensemble 6</div>
          <div>changing image</div>
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
