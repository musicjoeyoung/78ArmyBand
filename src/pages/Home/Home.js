import "./Home.scss"

import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HomeCarousel2 from "../../components/HomeCarousel/HomeCarousel2";
import React from "react";

const Home = () => {
  return (
    <div className="homeContainer">

      {/*      <img
        src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1694789478/imageedit_29_5556127462_focexx.png"
        className="homeContainer__homePageLogoImg"
        alt="US Army Reserve; 78th Army Band; Fort Dix, NJ; Fort Totten, NY"
      /> */}
      {/* <HomeCarousel /> */}
      <HomeCarousel2 />
    </div>
  );
};

export default Home;
