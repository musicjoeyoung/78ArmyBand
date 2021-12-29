import React, { useState } from "react";
import EventsModal from "./EventsModal";

const EventsMap = ({ events }) => {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null); //this is not working

  return (
    <div>
      <EventsModal
        title={events.bio}
        onClose={() => {
          setShow(false);
          console.log("closed");
        }}
        show={show}
      >
        {/* <h1>{modalData.bio}</h1> */}
        <p>test {events.bio}</p>
      </EventsModal>
      <>
        {events.map(
          (event) => (
            console.log("event.id", event.id),
            (
              <div className="eventsChildContainer" key={event.id}>
                <div className="eventsNames">
                  <div id="events">
                    <div
                      id="eventsAtag"
                      onClick={() => {
                        setShow(true);
                        setModalData(modalData);
                        console.log("Bio:", event.bio, "ID:", event.id);
                      }}
                    >
                      <div id="date">
                        <div id="Day">{event.day}</div>
                        <div id="Month">{event.month}</div>
                      </div>
                      <div id="infoContainer">
                        <h2 id="eventEnsemble">{event.ensemble}</h2>
                        <h2 id="eventTitle">{event.name}</h2>
                        <h3 id="eventLocation">{event.location}</h3>
                        <p id="eventCity">{event.cityState}</p>
                        <p id="eventTime">{event.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </>
    </div>
  );
};

export default EventsMap;
