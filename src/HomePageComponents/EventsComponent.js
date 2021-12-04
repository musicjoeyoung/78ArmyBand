import React from "react";
import EventsMap from "../Events/EventsMap";
import { events } from "../Events/eventsArray";

const eventsFirstThree = events.slice(0, 3);

const EventsComponent = () => {
  return (
    <div className="eventsComponent">
      <h3 id="mainDivTitle">
        <a href="./events" id="mainDivTitleEvents">
          Events
        </a>
      </h3>

      <EventsMap events={eventsFirstThree} />
      <a href="./events" id="moreEvents">
        Click here for more dates
      </a>
    </div>
  );
};

export default EventsComponent;
