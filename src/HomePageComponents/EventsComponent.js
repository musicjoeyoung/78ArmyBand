import React, { Component } from "react";
//import JobCalendar from "../JobCalendar";

export class EventsComponent extends Component {
  render() {
    return (
      <div className="events">
        <h3 id="mainDivTitle">
          <a href="./Events" id="mainDivTitleEvents">
            Events
          </a>
        </h3>

        <div className="eventsChildContainer">
          <div className="eventsNames">
            <div id="events">
              <a id="eventsAtag" href="link">
                <div id="date">
                  <div id="Day">11</div>
                  <div id="Month">Nov</div>
                </div>
                <div id="infoContainer">
                  <h2 id="eventTitle">Veterans Day Parade</h2>
                  <h3 id="eventLocation">Fifth Avenue</h3>
                  <p id="eventCity">New York, NY</p>
                  <p id="eventTime">12:00PM</p>
                </div>
              </a>
            </div>
            <div id="events">
              <a id="eventsAtag" href="link">
                <div id="date">
                  <div id="Day">11</div>
                  <div id="Month">Nov</div>
                </div>
                <div id="infoContainer">
                  <h2 id="eventTitle">Veterans Day Parade</h2>
                  <h3 id="eventLocation">Fifth Avenue</h3>
                  <p id="eventCity">New York, NY</p>
                  <p id="eventTime">12:00PM</p>
                </div>
              </a>
            </div>
            <div id="events">
              <a id="eventsAtag" href="link">
                <div id="date">
                  <div id="Day">11</div>
                  <div id="Month">Nov</div>
                </div>
                <div id="infoContainer">
                  <h2 id="eventTitle">Veterans Day Parade</h2>
                  <h3 id="eventLocation">Fifth Avenue</h3>
                  <p id="eventCity">New York, NY</p>
                  <p id="eventTime">12:00PM</p>
                </div>
              </a>
            </div>
            {/* <JobCalendar /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default EventsComponent;
