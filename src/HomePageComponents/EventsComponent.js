import React, { Component } from "react";
import JobCalendar from "../JobCalendar";

export class EventsComponent extends Component {
  render() {
    return (
      <div className="events">
        <h3 id="mainDivTitle">Events</h3>

        <div className="eventsChildContainer">
          <div className="eventsNames">
            {/*  <div id="events">events 1</div>
            <div id="events">events 2</div>
            <div id="events">events 3</div>
            <br /> */}
            <JobCalendar />
          </div>
          {/* <div className="eventsRequestButton">
            <p>
              Click{" "}
              <a href="/Contact.js" id="contactPageLink">
                here
              </a>{" "}
              for more information.
            </p>
            <a href="mailto:78tharmyband@gmail.com?subject=Request%78th%Army%Band">
              <button id="requestBand">Request the Band</button>
            </a>
          </div> */}
        </div>
      </div>
    );
  }
}

export default EventsComponent;
