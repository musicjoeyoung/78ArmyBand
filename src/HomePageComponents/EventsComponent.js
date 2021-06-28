import React, { Component } from "react";

export class EventsComponent extends Component {
  render() {
    return (
      <div className="events">
        <h3 id="mainDivTitle">Events</h3>
        <div className="eventsChildContainer">
          <div className="eventsNames">
            <div id="events">events 1</div>
            <div id="events">events 2</div>
            <div id="events">events 3</div>
            <br />
          </div>
          <div className="eventsRequestButton">
            <button id="requestBand">request the band</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventsComponent;
