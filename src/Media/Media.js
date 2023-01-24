import React from "react";
import bq from "../images/BQ-MyShot.png";

const Media = () => {
  return (
    <div className="parentDiv">
      <h1>Watch & Listen</h1>
      <div className="media">
        <div className="container">
          <iframe
            className="youtube"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/64R69szw6d4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mobileMedia">
          <img
            src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1674596968/Checkmate-ElisaSmith_25_h0odem.png"
            alt="Checkmate band with Elisa Smith"
          />
          <p>
            A few months ago, Elisa Smith reached out to the 78th Army Band's
            MPT,
            <a
              href="https://www.youtube.com/watch?v=fKENYjbsVBU"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to a Youtube video"
            >
              {" "}
              Checkmate
            </a>
            , to invite them to record a song she wrote about a child growing up
            to join the service and the emotions regarding it. It was an
            inspiring project, and we loved working with an artist who wanted to
            share our stories and our families stories. We are grateful that
            Elisa included us in this project and trusted us with her music.
          </p>
          <a
            href="https://www.youtube.com/watch?v=fKENYjbsVBU"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to a Youtube video"
          >
            Click to watch
          </a>
          ,
          <img src={bq} alt="Brass Quintet " />
          <p>
            Check out our playlist{" "}
            <a
              href="https://www.youtube.com/playlist?list=PLT32rVKdeANw8uz8BGSPy88gdv8UQwal2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to a Youtube playlist"
            >
              #quarantunes{" "}
            </a>
            a collection of tunes we performed during the pandemic of 2020.
          </p>
          <a
            href="https://www.youtube.com/playlist?list=PLT32rVKdeANw8uz8BGSPy88gdv8UQwal2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to a Youtube playlist"
          >
            Click to watch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
