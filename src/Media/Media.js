import React from "react";
import Navbar from "../Navbar";

import instagram from "../images/instagram.png";
import twitter from "../images/twitter1.png";
import facebook from "../images/facebook.webp";
import youtube from "../images/YouTube.png";

const Media = () => {
  return (
    <div>
      <Navbar />
      <h1>Media</h1>
      {/*    <div className="media-page-bg-text">
      </div> */}
      {/*  <div className="media-page-pic-and-text">
        <div className="media-page-pic">
          <img src={armyband} className="media-page-bg-image" alt="" />
        </div>
      </div> */}
      <div className="media">
        {/* <h3 id="mainDivTitleMedia">Media</h3> */}
        <div className="container">
          <div>
            <iframe
              className="youtube"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/64R69szw6d4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <h2 id="connect">Follow Us</h2>
          <div className="socialContainer">
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
        </div>
      </div>
      <br />

      {/*    <div>
        Articles
        <div>actual Article</div>
        <div>carousel of Articles</div>
      </div> */}
    </div>
  );
};

export default Media;
