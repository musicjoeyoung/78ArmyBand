import React from "react";
import Navbar from "./Navbar";

const Request = () => {
  return (
    <div>
      <Navbar />
      <div
        className="contact-page-request-the-band"
        id="contact-page-request-the-band"
      >
        <h2>Request the Band</h2>
        <p id="requestBandPTag">
          To request local support, complete a{" "}
          <a
            id="requestBandInfo"
            href="https://www.usar.army.mil/Portals/98/Documents/For_Commands/dd2536.pdf"
          >
            DD Form 2536 - Request for Armed Forces Participation in Public
            Events
          </a>{" "}
          and indicate the type of support requested. Submit the form to the
          78th Army Band no less than 60 days prior to the scheduled event.
        </p>
        <br />
        <a href="mailto:78tharmyband@gmail.com?subject=Request%78th%Army%Band">
          <button>Request the Band</button>
        </a>
      </div>
    </div>
  );
};

export default Request;
