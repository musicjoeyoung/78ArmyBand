import React from "react";
import checkmate from "./images/Checkmate.webp";

const PressKit = () => {
  return (
    <div className="parentDiv">
      <div className="pressKit">
        <h1>Press Kit</h1>
        <div className="pressKitDiv">
          BIO
          <div>
            <h2>Checkmate</h2>
            <img src={checkmate} alt="'Checkmate' rock band" />
          </div>
        </div>
        <div className="pressKitDiv">PHOTOS</div>
        <div className="pressKitDiv">MUSIC</div>
        <div className="pressKitDiv">VIDEOS</div>
        <div className="pressKitDiv">PRESS</div>
        <div className="pressKitDiv">HIGHLIGHTS & ACHIEVEMENTS</div>
        <div className="pressKitDiv">SOCIAL MEDIA LINKS</div>
        <div className="pressKitDiv">CONTACT</div>
      </div>
    </div>
  );
};

export default PressKit;
