import React from "react";
import "./App.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "./images/armyband1.jpg";
import img2 from "./images/armyband2.jpeg";
import img3 from "./images/armyband3.jpeg";
export default function HomeCarousel() {
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
