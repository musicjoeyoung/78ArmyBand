import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import armyband from "./images/78armybandrrecording.jpeg";

export class Jobs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="jobs-page-pic-and-text">
          <div className="jobs-page-pic">
            <img src={armyband} className="jobs-page-bg-image" alt="" />
          </div>
          <div className="jobs-page-bg-text">
            <h1>jobs</h1>
          </div>
        </div>
        <div className="eventsList">
          Divs whose event information changes on hover.
          <div>Event information</div>
        </div>
        <div>Calendar here</div>
        <Footer />
      </div>
    );
  }
}

export default Jobs;
