import React from "react";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import parade from "/Users/musicjoeyoung/Desktop/Coding/Army/78armyband/src/assets/images/78MarchMobile.jpg";
import "./Home.scss"

const Home = () => {
  return (
    <>
      <div className="container">
        <img src={parade} className="container__mobileHomeImg" alt="Band marching" />
        <img
          src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1674498250/78logo_1_fsqjox.png"
          className="container__homePageLogoImg"
          alt="US Army Reserve; 78th Army Band; Fort Dix, NJ; Fort Totten, NY"
        />
      </div>
      <HomeCarousel />
    </>
  );
};

export default Home;
