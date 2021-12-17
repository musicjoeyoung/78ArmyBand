import React, { useEffect } from "react";

const Twitter = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
        <a
          className="twitter-timeline"
          data-theme="dark"
          data-tweet-limit="2"
          data-chrome="noheader nofooter noborders"
          href="https://twitter.com/78thArmyBand"
        >
          Tweets by 78thArmyBand
        </a>
        {/*        <a
          className="twitter-timeline"
          href="https://twitter.com/78thArmyBand?ref_src=twsrc%5Etfw"
        >
          Tweets by 78thArmyBand
        </a>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script> */}
      </div>
    </section>
  );
};

export default Twitter;
