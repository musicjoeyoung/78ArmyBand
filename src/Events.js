import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import armyband3 from "./images/78armybandtimessquare.jpeg";
import EventsComponent from "./HomePageComponents/EventsComponent.js";
//import JobCalendar from "./JobCalendar";

export class Events extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="events-page-bg-text">
          <h1>Events</h1>
        </div>
        <div className="events-page-pic-and-text">
          <div className="events-page-pic">
            <img src={armyband3} className="events-page-bg-image" alt="" />
          </div>
        </div>
        <div className="eventsList">
          <EventsComponent />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Events;
