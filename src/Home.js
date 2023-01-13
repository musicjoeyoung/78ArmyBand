import React from "react";
import HomeCarousel from "./HomeCarousel";
import Navbar from "./Navbar";

import logo from "./images/78logo.png";

//import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <Navbar />
      <br />
      <img src={logo} className="homePageLogoImg" alt="logo" />
      <HomeCarousel />
    </div>
  );
};

export default Home;
