import React from "react";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import facebook from "./images/facebook.png";
import youtube from "/Users/musicjoeyoung/Desktop/Coding/Army/78armyband/src/images/youtube.png";

const SocialContainer = () => {
  return (
    <div className="iconContainer">
      <a href="https://www.instagram.com/78tharmyband/">
        <img src={instagram} className="socialLogo" alt="Instagram" />
      </a>
      <a href="https://twitter.com/78tharmyband">
        <img src={twitter} className="socialLogo" alt="Twitter" />
      </a>
      <a href="https://www.facebook.com/78thArmyBand">
        <img src={facebook} className="socialLogo" alt="Facebook" />
      </a>
      <a href="https://www.youtube.com/@78thArmyBand">
        <img src={youtube} className="socialLogo" alt="Youtube" />
      </a>
    </div>
  );
};

export default SocialContainer;
