import React, { Component } from "react";
import HomeCarousel from "./HomeCarousel";
import Navbar from "./Navbar";
import SignUpLinkComponent from "./HomePageComponents/SignUpLinkComponent.js";
import AboutComponent from "./HomePageComponents/AboutComponent.js";
import EnsemblesComponent from "./HomePageComponents/EnsemblesComponent.js";
import EventsComponent from "./HomePageComponents/EventsComponent.js";
import MediaComponent from "./HomePageComponents/MediaComponent.js";
import JobsComponent from "./HomePageComponents/JobsComponent";
import Footer from "./Footer";

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <h1 id="homePageH1">
          New York City’s Own 78th Army Band
          <br />
          <p id="homePageP">
            Serving the Greater New York, New Jersey, and Pennsylvania areas.
          </p>
        </h1>
        <HomeCarousel />
        <SignUpLinkComponent />
        <AboutComponent />
        <EnsemblesComponent />
        <EventsComponent />
        <MediaComponent />
        <JobsComponent />
        <Footer />
      </div>
    );
  }
}

export default Home;
