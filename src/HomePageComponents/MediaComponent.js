import React, { Component } from "react";

export class MediaComponent extends Component {
  render() {
    return (
      <div className="media">
        <h3 id="mainDivTitleMedia">Media</h3>
        <div className="mediaChildContainer">
          <div className="mediaVideosPicturesArticles">
            <div id="VidsAndPics">
              <div id="mediaVideos">videos</div>
              <div id="mediaPictures">pictures</div>
            </div>
            <div id="mediaArticles">articles</div>
          </div>
          <div className="mediaVideo">
            <div>
              <iframe
                id="selectedMediaVideo"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/64R69szw6d4"
                title="YouTube video player"
                frameorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MediaComponent;
