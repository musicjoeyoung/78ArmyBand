import React from "react";
import HomeCarousel from "./HomeCarousel";
import Navbar from "./Navbar";
//import SignUpLinkComponent from "./HomePageComponents/SignUpLinkComponent.js";
import HistoryComponent from "./HomePageComponents/HistoryComponent.js";
import MeetTheBandComponent from "./HomePageComponents/MeetTheBandComponent";
import EnsemblesComponent from "./HomePageComponents/EnsemblesComponent.js";
import EventsComponent from "./HomePageComponents/EventsComponent.js";
import MediaComponent from "./HomePageComponents/MediaComponent.js";
import JobsComponent from "./HomePageComponents/JobsComponent";
import logo from "./images/78armybandlyrelogo.png";

//import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <Navbar />
      <br />
      <img src={logo} className="homePageLogoImg" alt="logo" />
      <HomeCarousel />
      {/*  <Fade direction="up">
          <SignUpLinkComponent />
        </Fade> */}
      <HistoryComponent />
      <MeetTheBandComponent />
      <EnsemblesComponent />

      <EventsComponent />
      <MediaComponent />
      <JobsComponent />
    </div>
  );
};

export default Home;
