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
          </div>
        </div>
        <button id="requestBand">request the band</button>
      </div>
    );
  }
}

export default EventsComponent;
