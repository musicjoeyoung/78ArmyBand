import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import img1 from "./images/armyband4.webp";
import img2 from "./images/armyband5.webp";
import img3 from "./images/armyband6.webp";

const WelcomeCarousel = () => {
  return (
    <div>
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
