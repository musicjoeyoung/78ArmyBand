import React from "react";
import HomeCarousel from "./HomeCarousel";
import Navbar from "./Navbar";
import logo from "./images/78logo.webp";
import armyPhillyParade from "./images/armyPhillyParade.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="imgContainer">
        <img
          src={armyPhillyParade}
          className="mobileHomeImg"
          alt="Band marching"
        />
        <img src={logo} className="homePageLogoImg" alt="logo" />
      </div>
      <HomeCarousel />
    </>
  );
};

export default Home;
