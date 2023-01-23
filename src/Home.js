import React from "react";
import HomeCarousel from "./HomeCarousel";
//import logo from "./images/78logo.png";
import parade from "./images/78MarchMobile.jpg";

const Home = () => {
  return (
    <>
      <div className="imgContainer">
        <img src={parade} className="mobileHomeImg" alt="Band marching" />
        <img
          src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1674497974/78logo_si1qys.png"
          className="homePageLogoImg"
          alt="logo"
        />
      </div>
      <HomeCarousel />
    </>
  );
};

export default Home;
