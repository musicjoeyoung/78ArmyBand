import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import armyband3 from "./images/armyband3.jpeg";

export class Media extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="media-page-pic-and-text">
          <div className="media-page-pic">
            <img src={armyband3} className="media-page-bg-image" alt="" />
          </div>
          <div className="media-page-bg-text">
            <h1>Media</h1>
          </div>
        </div>
        <div className="media">
          <h3 id="mainDivTitleMedia">Media</h3>
          <div className="mediaChildContainer">
            <div className="mediaVideo">
              <div>
                <iframe
                  id="selectedMediaVideo"
                  width="560"
                  height="315"
                  src="http://www.youtube.com/embed/?listType=user_uploads&list=78thArmyBand"
                  title="YouTube video player"
                  frameorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div>
          Articles
          <div>actual Article</div>
          <div>carousel of Articles</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Media;
