import "./Home.scss"

import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="homeContainer">

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
