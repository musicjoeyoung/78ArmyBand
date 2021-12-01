import React from "react";
//import JobCalendar from "../JobCalendar";
import EventsMap from "../Events/EventsMap";
import { events } from "../Events/eventsArray";

const eventsFirstThree = events.slice(0, 3);

const EventsComponent = () => {
  return (
    <div className="eventsComponent">
      <h3 id="mainDivTitle">
        <a href="./Events" id="mainDivTitleEvents">
          Events
        </a>
      </h3>

      <EventsMap events={eventsFirstThree} />
      <a href="./Events" id="moreEvents">
        Click here for more dates
      </a>
    </div>
  );
};

export default EventsComponent;
