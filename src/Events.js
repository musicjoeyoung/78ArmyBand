import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import armyband3 from "./images/armyband3.jpeg";

export class Events extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <img src={armyband3} className="ensembles-page-bg-image" alt="" />

        <div className="ensembles-page-bg-text">
          <h1>Events</h1>
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

export default Events;
