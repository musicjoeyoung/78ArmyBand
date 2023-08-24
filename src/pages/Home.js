import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import parade from "/Users/musicjoeyoung/Desktop/Coding/Army/78armyband/src/assets/images/78MarchMobile.jpg";

const Home = () => {
  return (
    <>
      <div className="imgContainer">
        <img src={parade} className="mobileHomeImg" alt="Band marching" />
        <img
          src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1674498250/78logo_1_fsqjox.png"
          className="homePageLogoImg"
          alt="US Army Reserve; 78th Army Band; Fort Dix, NJ; Fort Totten, NY"
        />
      </div>
      <HomeCarousel />
    </>
  );
};

export default Home;
