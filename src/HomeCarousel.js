import React from "react";
import "./App.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "./images/BandParade2.jpg";
import img2 from "./images/BandFormation.jpg";
import img3 from "./images/BandParadeNYC.jpeg";

const HomeCarousel = () => {
  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval="5000"
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
