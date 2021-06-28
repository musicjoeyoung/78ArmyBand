import React, { Component } from "react";
import YouTube from "../images/YouTube.png";
import FB from "../images/FB.png";
import circle78 from "../images/78circle.png";

export class MediaComponent extends Component {
  render() {
    return (
      <div className="media">
        <h3 id="mainDivTitleMedia">Media</h3>
        <div className="mediaChildContainer">
          <div className="mediaVideosPicturesArticles">
            <div id="mediaVideos">
              <a href="https://www.youtube.com/channel/UCnvvkFN8g_YqQDxFx9oQL2w">
                <img id="mediaLogo" src={YouTube} />
              </a>
            </div>
            <br />
            <div id="mediaPictures">
              <a href="https://www.facebook.com/78thArmyBand">
                <img id="mediaLogo" src={FB} />
              </a>
            </div>
            <br />
            <div id="mediaArticles">
              <a href="https://www.bands.army.mil/organizations/pages/default.asp?unit=78ABNJ&p=news&NewsID=1201">
                <img id="mediaLogo" src={circle78} />
              </a>
            </div>
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
