import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
/* import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css"; */
import img1 from "./images/armyband4.jpeg";
import img2 from "./images/armyband5.jpeg";
import img3 from "./images/armyband6.jpeg";

const WelcomeCarousel = () => {
  return (
    <div>
      {/*     <AliceCarousel
        autoPlay
        autoPlayInterval="7000"
        infinite
        animationType="fadeout"
      >
        <img src={img1} alt="" className="sliderimgWelcome" />
        <img src={img2} alt="" className="sliderimgWelcome" />
        <img src={img3} alt="" className="sliderimgWelcome" />
      </AliceCarousel> */}
      <Link to="/home">
        <ul className="cb-slideshow">
          <li>
            <span>{img1}</span>
            <div>
              <h3>78th Army Band</h3>
            </div>
          </li>
          <li>
            {" "}
            <span>{img2}</span>
            <div>
              <h3>New York City's Own</h3>
            </div>
          </li>
          <li>
            {" "}
            <span>{img3}</span>
            <div>
              <h3>Dauntless</h3>
            </div>
          </li>
        </ul>
      </Link>
    </div>
  );
};
export default WelcomeCarousel;
