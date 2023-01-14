import React from "react";
import "./App.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "./images/BandParade2.webp";
import img2 from "./images/BandFormation.webp";
import img3 from "./images/BandParadeNYC.webp";

const HomeCarousel = () => {
  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval="3000"
      infinite
      animationType="fadeout"
    >
      <img src={img3} alt="" className="sliderimg" />
      <img src={img1} alt="" className="sliderimg" />
      <img src={img2} alt="" className="sliderimg" />
    </AliceCarousel>
  );
};

export default HomeCarousel;
