import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import armyband3 from "../images/78armybandtimessquare.jpeg";
import EventsComponent from "../HomePageComponents/EventsComponent.js";
import EventsMap from "./EventsMap.js";
import { events } from "./eventsArray";
//import JobCalendar from "./JobCalendar";

const Events = () => {
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
      <div className="events">
        {/* <EventsComponent /> */}
        <EventsMap events={events} />
      </div>
      <Footer />
    </div>
  );
};
export default Events;
