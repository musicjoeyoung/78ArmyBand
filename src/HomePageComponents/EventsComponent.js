import React, { Component } from "react";

export class EventsComponent extends Component {
  render() {
    return (
      <div className="events">
        <h3 id="mainDivTitle">Events</h3>
        <div className="eventsChildContainer">
          <div className="eventsVideoContainer">
            <div id="eventsVideo">
              <iframe
                id="selectedEventsVideo"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/srDvDdzPnrg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
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
