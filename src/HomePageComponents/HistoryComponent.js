import React from "react";
import armyband7 from "../images/armyband7.jpeg";

const HistoryComponent = () => {
  return (
    <div className="about">
      <h3 id="mainDivTitleHistory">
        <a id="historylink" href="./history">
          History
        </a>
      </h3>
      <div className="aboutChildContainer">
        <div className="aboutimage">
          <img src={armyband7} alt="" id="armyband7" />
        </div>

        <div className="aboutcarousel">
          <p id="history¶">
            The 78th Infantry Division was formed in August of 1942. One year
            later, the 78th Army Band was formed on the 2nd of August, 1943.
            During this time, it was known as the 78th Infantry Division Band.
            The insignia was a lightning strike on a blood red field. The
            battles that the 78th Infantry fought, according to the French,
            resembled a lightning strike, leaving the field red. <br />
            <a id="historylinkReadMore" href="./history">
              Read more...
            </a>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default HistoryComponent;