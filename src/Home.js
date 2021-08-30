import React, { Component } from "react";
import HomeCarousel from "./HomeCarousel";
import Navbar from "./Navbar";
//import SignUpLinkComponent from "./HomePageComponents/SignUpLinkComponent.js";
import AboutComponent from "./HomePageComponents/AboutComponent.js";
import EnsemblesComponent from "./HomePageComponents/EnsemblesComponent.js";
import EventsComponent from "./HomePageComponents/EventsComponent.js";
import MediaComponent from "./HomePageComponents/MediaComponent.js";
import JobsComponent from "./HomePageComponents/JobsComponent";
import Footer from "./Footer";
import logo from "./images/78armybandlyrelogo.png";
import { Fade } from "react-awesome-reveal";

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <img src={logo} className="homePageLogoImg" alt="logo" />
        <HomeCarousel />
        {/*  <Fade direction="up">
          <SignUpLinkComponent />
        </Fade> */}
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
