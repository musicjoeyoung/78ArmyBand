import React from "react";
import "./App.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const HomeCarousel = () => {
  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval="3000"
      infinite
      animationType="fadeout"
    >
      <img
        src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1674700058/BandParadeNYC_v1cnja.webp"
        alt=""
        className="sliderimg"
      />
      <img
        src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1674700059/BandParade2_sn83kd.webp"
        alt=""
        className="sliderimg"
      />
      <img
        src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1674700058/BandFormation_ftintj.webp"
        alt=""
        className="sliderimg"
      />
    </AliceCarousel>
  );
};

export default HomeCarousel;
