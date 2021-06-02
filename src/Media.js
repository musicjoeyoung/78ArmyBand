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
        <div>
          Videos
          <div>actual video</div>
          <div>carousel of videos</div>
        </div>
        <div>
          Pictures
          <div>actual Picture</div>
          <div>carousel of Pictures</div>
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
