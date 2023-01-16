import React from "react";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import facebook from "./facebook.png";
import youtube from "./youtube.png";

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
