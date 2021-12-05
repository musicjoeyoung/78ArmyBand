import React from "react";
import Navbar from "../Navbar";
import armyband3 from "../images/78armybandtimessquare.jpeg";
import EventsMap from "./EventsMap.js";
import { events } from "./eventsArray";

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
        <EventsMap events={events} />
      </div>
    </div>
  );
};
export default Events;
