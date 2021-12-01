import React from "react";

const EventsMap = ({ events }) => {
  return events.map((events) => (
    <div className="eventsChildContainer">
      <div className="eventsNames">
        <div id="events">
          <a id="eventsAtag" href="link">
            <div id="date">
              <div id="Day">{events.day}</div>
              <div id="Month">{events.month}</div>
            </div>
            <div id="infoContainer">
              <h2 id="eventEnsemble">{events.ensemble}</h2>
              <h2 id="eventTitle">{events.name}</h2>
              <h3 id="eventLocation">{events.location}</h3>
              <p id="eventCity">{events.cityState}</p>
              <p id="eventTime">{events.time}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  ));
};

export default EventsMap;
