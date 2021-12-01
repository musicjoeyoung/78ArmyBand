import React from "react";
import YouTube from "../images/YouTube.png";
import FB from "../images/FB.png";
import circle78 from "../images/78circle.png";

const MediaComponent = () => {
  return (
    <div className="media">
      <h3 id="mainDivTitleMedia">Media</h3>
      <div className="mediaHomePageChildContainer">
        <div className="mediaVideosPicturesArticles">
          <div id="mediaVideos">
            <a href="https://www.youtube.com/channel/UCnvvkFN8g_YqQDxFx9oQL2w">
              <img id="mediaLogo" src={YouTube} alt="YouTube logo" />
            </a>
          </div>
          <br />
          <div id="mediaPictures">
            <a href="https://www.facebook.com/78thArmyBand">
              <img id="mediaLogo" src={FB} alt="FB logo" />
            </a>
          </div>
          <br />
          <div id="mediaArticles">
            <a href="https://www.bands.army.mil/organizations/pages/default.asp?unit=78ABNJ&p=news&NewsID=1201">
              <img id="mediaLogo" src={circle78} alt="99th logo" />
            </a>
          </div>
        </div>
        <div className="fbAndVideo">
          <div className="fb">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F78thArmyBand%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              height="500"
              title="Facebook Widget"
              /* style="border:none;overflow:hidden" */
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
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
    </div>
  );
};

export default MediaComponent;
