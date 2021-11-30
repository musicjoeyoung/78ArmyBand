import React from "react";
//import JobCalendar from "../JobCalendar";
import EventsMap from "../Events/EventsMap";
import { events } from "../Events/eventsArray";

const EventsComponent = () => {
  return (
    <div className="eventsComponent">
      <h3 id="mainDivTitle">
        <a href="./Events" id="mainDivTitleEvents">
          Events
        </a>
      </h3>

      <EventsMap events={events} />
    </div>
  );
};

export default EventsComponent;
