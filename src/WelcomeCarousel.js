import React from "react";
import "./App.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "./images/armyband4.jpeg";
import img2 from "./images/armyband5.jpeg";
import img3 from "./images/armyband6.jpeg";
export default function WelcomeCarousel() {
  return (
    <div>
      <AliceCarousel autoPlay autoPlayInterval="3000" infinite>
        <img src={img1} alt="" className="sliderimg" />
        <img src={img2} alt="" className="sliderimg" />
        <img src={img3} alt="" className="sliderimg" />
      </AliceCarousel>
    </div>
  );
}
