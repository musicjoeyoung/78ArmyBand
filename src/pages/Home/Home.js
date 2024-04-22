import React from "react";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import parade from "../../assets/images/78MarchMobile.jpg";
import "./Home.scss"

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <img src={parade} className="homeContainer__mobileHomeImg" alt="Band marching" />
        <img
          src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1694789478/imageedit_29_5556127462_focexx.png"
          className="homeContainer__homePageLogoImg"
          alt="US Army Reserve; 78th Army Band; Fort Dix, NJ; Fort Totten, NY"
        />
      </div>
      <HomeCarousel />
    </>
  );
};

export default Home;
