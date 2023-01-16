import React from "react";
import HomeCarousel from "./HomeCarousel";
import Navbar from "./Navbar";

import logo from "./images/78logo.webp";

//import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img src={logo} className="homePageLogoImg" alt="logo" />
      <HomeCarousel />
    </div>
  );
};

export default Home;
