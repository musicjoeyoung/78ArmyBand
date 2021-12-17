import React, { useState } from "react";
import EventsModal from "./EventsModal";

const EventsMap = ({ events }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {events.map((events) => (
        <div className="eventsChildContainer" key={events.id}>
          <div className="eventsNames">
            <div id="events">
              <div id="eventsAtag" onClick={() => setShow(true)}>
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
              </div>
            </div>
          </div>
        </div>
      ))}
      <EventsModal
        title={events.bio}
        onClose={() => setShow(false)}
        show={show}
      >
        <p>test {events.bio}</p>
      </EventsModal>
    </div>
  );
};

export default EventsMap;
