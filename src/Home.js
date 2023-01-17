import React from "react";
import HomeCarousel from "./HomeCarousel";
import Navbar from "./Navbar";
import logo from "./images/78logo.webp";
import parade from "./images/78MarchMobile.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="imgContainer">
        <img src={parade} className="mobileHomeImg" alt="Band marching" />
        <img src={logo} className="homePageLogoImg" alt="logo" />
      </div>
      <HomeCarousel />
    </>
  );
};

export default Home;
