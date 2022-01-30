import React from "react";
import March78 from "../images/78March.jpeg"

const MeetTheBandComponent = () => {
  return (
    <div className="about">
      <h3 id="aboutCompLinks">
        <a id="mainDivTitleMeet" href="./meettheband">
          Meet the Band
        </a>
      </h3>

      <p id="meettheband">
        Meet the musicians and learn more about who we are. <br />
        <a id="meetthebandlinkReadMore" href="./meettheband">
          Read more...
        </a>
      </p>
        <div className="ensembleImageContainer">
          <img id="ensembleImage" alt="" src={March78} />
        </div>
    </div>
  );
};
export default MeetTheBandComponent;
