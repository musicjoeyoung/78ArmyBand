import React from "react";
import Navbar from "../Navbar";
import armyband from "../images/78armybandlibertyvibes.webp";
import Twitter from "./Twitter";

const Media = () => {
  return (
    <div>
      <Navbar />
      <div className="media-page-bg-text">
        <h1>Media</h1>
      </div>
      <div className="media-page-pic-and-text">
        <div className="media-page-pic">
          <img src={armyband} className="media-page-bg-image" alt="" />
        </div>
      </div>
      <div className="media">
        <h3 id="mainDivTitleMedia">Media</h3>
        <div className="container">
          <div className="mediaChildContainer">
            <div className="mediaVideo">
              <div>
                <iframe
                  id="selectedMediaVideo"
                  width="auto"
                  height="auto"
                  src="http://www.youtube.com/embed/?listType=user_uploads&list=78thArmyBand"
                  title="YouTube video player"
                  frameorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="mediaVideo">
              <div>
                <iframe
                  id="selectedMediaVideo"
                  width="auto"
                  height="auto"
                  src="https://www.youtube.com/embed/mU08DRyhItk"
                  title="YouTube video player"
                  frameorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="mediaChildContainer">
            <div className="mediaVideo">
              <div>
                <iframe
                  id="selectedMediaVideo"
                  width="auto"
                  height="auto"
                  src="https://www.youtube.com/embed/o2KuVbnZ9FI"
                  title="YouTube video player"
                  frameorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="mediaVideo">
              <div>
                <iframe
                  id="selectedMediaVideo"
                  width="auto"
                  height="auto"
                  src="https://www.youtube.com/embed/64R69szw6d4"
                  title="YouTube video player"
                  frameorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="mediaChildContainer">
            <div className="mediaVideo">
              <div>
                <iframe
                  id="selectedMediaVideo"
                  width="auto"
                  height="auto"
                  src="https://www.youtube.com/embed/G8nR49lf3Uc"
                  title="YouTube video player"
                  frameorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="mediaVideo">
              <div>
                <iframe
                  id="selectedMediaVideo"
                  width="auto"
                  height="auto"
                  src="https://www.youtube.com/embed/H97cUH_GqGA"
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
      <br />
      <h2 id="connect">Follow Us</h2>
      <div className="mediaHorizontal">
        <div className="social">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F78thArmyBand%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340"
            height="500"
            title="Facebook Widget"
            /* style="border:none;overflow:hidden" */
            scrolling="no"
            frameBorder="0"
            /* allowFullScreen="true" */
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="social">
          <Twitter />
        </div>
      </div>
      {/*    <div>
        Articles
        <div>actual Article</div>
        <div>carousel of Articles</div>
      </div> */}
    </div>
  );
};

export default Media;
